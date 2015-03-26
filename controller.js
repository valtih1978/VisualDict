
function Controller() {

	var me = this
	
	this.graph = this.model = undefined
	this.separator = undefined
	
	validate = function (name, mustExist) {
		name = name.trim()
		if (name.indexOf(me.separator) != -1) throw new Error( "Separator is forbidden in the words")
		if (name.length == 0) throw new Error("Name must be not empty")
		if (mustExist != (me.graph.get(name) != null)) throw new Error("node `" + name + (mustExist ? ' must exist' : ' must not exist' ))
		return name
	}
	
	createNodeNameChecked = function(name) {
		me.graph.set(name, "");
	}
	
	this.createNode = function(name) {
		name = validate(name, false)
		createNodeNameChecked(name)
		return name
	}
	
	this.listConnections = function(key) {
		var str = me.graph.get(key)
		return (str == "") ? [] : str.split(me.separator)
	}

	connectionSet = function (key) {
		var list = me.listConnections(key)
		var dict = {}
		for (i in list) {
			dict[list[i]] = null // dummy value
		}
		return dict
	}

	this.compound = function(action) {
		me.model.beginCompoundOperation();
		try {
			return action()
		} finally {
			me.model.endCompoundOperation();
		}
	}
	
	
	this.renameNode = function(aname, bname) {
		var newName = validate(bname, false)
		return me.compound(function() {
			var deleted = me.deleteNode(aname)
			var mustConnectTo = deleted.connectedTo
			console.log("deleted connections with " + mustConnectTo)
			createNodeNameChecked(newName)
			for (i in mustConnectTo)
				me.connect(mustConnectTo[i], newName)
			return [deleted.name, newName]
		})
	}
	
	this.deleteNode = function(name) {
		name = validate(name, true)
		return me.compound(function () {
			// can we combine multiple update requests into one in google realtime?
			var connectedTo = me.listConnections(name)
			for (i in connectedTo)
				disconnectOneway(connectedTo[i], name)
				
			me.graph.delete(name);
			return {name:name, connectedTo:connectedTo}
		})
	}
	
	disconnectOneway = function(fromKey, entry) {
		//console.log("deleted " + endtry + " from " + fromKey)
		var connections = connectionSet(fromKey)
		delete connections [entry]
		setConnections(fromKey, connections)
	}
	
	setConnections = function(key, dict) {
		var values = Object.keys(dict).join(',')
		console.log("storing " + values + " values into " + key)
		me.graph.set(key, values)
	}

	this.disconnectNodes = function(a, b) {
		a = validate(a, true) ; b = validate(b, true)
		return me.compound(function() {
			disconnectOneway(a, b)
			disconnectOneway(b, a)
			console.log("disconnecting " + b + " from " + a + "("+me.graph.get(a)+")")
		})
	}
	
	this.removeEdge = function(edgeId) {
		var pair = edgeId.split(me.separator)
		me.disconnectNodes(pair[0], pair[1])
	}

	this.connect = function(a,b) {
		a = validate(a, true) ; b = validate(b, true)
		
		// double connections dubious and create problems in renaming. 
		// Renaming removes the connections, creates the node with new name and reconnects. It will try to connect to deleted, old name and fail. Do not permit the self-refs to happen at all.
		if (a == b) return //throw new Error( "Cannot create self reference. Requested one for " + )
			
		
		function half(a,b) {
			var aValues = connectionSet(a)
			aValues[b] = null // append an item into set: map to dummy value
			setConnections(a, aValues)
		}
		
		//These checks are not needed from a graphical envirnoment, 
		// which will have no option to select non-existing for connection
		if (me.graph.get(a) == null) throw new Error("node " + a + " does not exist")
		if (me.graph.get(b) == null) throw new Error("node " + b + " does not exist")
		
		return me.compound(function() {
			half(a,b)
			half(b,a)
		})
	}

	this.getConfiguration = function () {
		return me.model.getRoot().get('configuration')
	}
	this.setConfig = function(name, value) {
		if (me.getConfiguration().get(name) != value) {
			console.log("config(" + name + ") changed " + me.getConfiguration().get(name) + " => " + value)
			me.getConfiguration().set(name, value)
		}
	}

	this.defaultConfig = {langs:{'default': 'blue'}, separator: ',', 'almende-mode': 'partial'}
	
	this.start = function () {

		function initializeModel(model) {
			function append(title, dict) {
				model.getRoot().set(title, model.createMap(dict));
			}
			append('configuration', me.defaultConfig)
			append('graph', {a:"b,c", b:"a,d", c:"a,d",d:"c,b,1", "1":"d"})
		}
		
		var loaded = false
		function _onFileLoaded(doc) {
			if (loaded) return ; loaded = true // re-load happens on token refresh
			me.model = doc.getModel() ; me.separator = me.model.getRoot().get('configuration').get('separator')
			me.graph = me.model.getRoot().get('graph');
			
			me.graph.addEventListener(gapi.drive.realtime.EventType.VALUE_CHANGED, onMapValueChanged);
			onFileLoaded(doc)
		/*      textArea2.onkeyup = function() {
			string.setText(textArea2.value);
		  };*/

		  undoButton.onclick = function(e) {
			me.model.undo();
		  };
		  redoButton.onclick = function(e) {
			me.model.redo();
		  };

		  // Add event handler for UndoRedoStateChanged events.
		  var onUndoRedoStateChanged = function(e) {
			undoButton.disabled = !e.canUndo;
			redoButton.disabled = !e.canRedo;
		  };
		  me.model.addEventListener(gapi.drive.realtime.EventType.UNDO_REDO_STATE_CHANGED, onUndoRedoStateChanged);
		}
		
		var realtimeOptions = {
		  // * Client ID from the console.
		  clientId: '1088706429537-4oqhqr7o826ditbok23sll1rund1jim1.apps.googleusercontent.com',
		   //* The ID of the button to click to authorize. Must be a DOM element ID.
		  authButtonElementId: 'authorizeButton',
		  initializeModel: initializeModel, // Function to be called when a Realtime model is first created.
		  autoCreate: true, // Autocreate files right after auth automatically.
		  onFileLoaded: _onFileLoaded, // Function to be called every time a Realtime file is loaded.
		  registerTypes: null, // No action to inityalize custom Collaborative Objects types.
		  afterAuth: null // No action after authorization and before loading files.
		}

		rtclient.loaderInst = new rtclient.RealtimeLoader(realtimeOptions);
		rtclient.loaderInst.start();
	}
	
	this.start()
}

