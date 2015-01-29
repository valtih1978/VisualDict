//requires valutils

var controller = new function() {

	this.graph = this.model = undefined
	this.modelSeparator = undefined
	
	this.validateName = function (name) {
		name = name.trim()
		if (name.indexOf(modelSeparator) != -1) throw new Error( "Separator is forbidden in the words")
		if (name.length == 0) throw new Error("Name must be not empty")
		if (graph.get(name)) throw new Error("node `" + name + "` already exists")
		return name
	}
	
	this.createNode = function(name) {
		graph.set(name, "");
	}
	
	this.listConnections = function(key) {
		var str = graph.get(key)
		return (str == "") ? [] : str.split(modelSeparator)
	}

	this.connectionSet = function (key) {
		var list = listConnections(key)
		var dict = {}
		for (i in list) {
			dict[list[i]] = null // dummy value
		}
		return dict
	}

	function compound(action) {
		model.beginCompoundOperation();
		try {
			return action()
		} finally {
			model.endCompoundOperation();
		}
	}
	
	
	this.renameNode = function() {
		var newName = validateName(bval())
		return compound(function() {
			var mustConnectTo = deleteNode()
			console.log("deleted connections with " + mustConnectTo)
			createNode(newName)
			for (i in mustConnectTo)
				connectSpecified(mustConnectTo[i], newName)
		})
	}
	
	this.deleteNode = function(name) {
		return compound(function() {
			// can we combine multiple update requests into one in google realtime?
			var connectedTo = listConnections(name)
			for (i in connectedTo)
				disconnectFrom(connectedTo[i], name)
				
			graph.delete(name);
			return connectedTo
		})
	}
	
	this.disconnectFrom = function(fromKey, entry) {
		//console.log("deleted " + endtry + " from " + fromKey)
		var connections = connectionSet(fromKey)
		delete connections [entry]
		setConnections(fromKey, connections)
	}
	
	this.setConnections = function(key, dict) {
		console.log("storing " + dict.length + " values into " +key  + ": " + ValUtils.keys(dict).join(modelSeparator))
		graph.set(key, /*dict.keys()*/ValUtils.keys(dict).join(modelSeparator))
	}

	this.disconnectNodes = function(a, b) {
		return compound(function() {
			disconnectFrom(a, b)
			disconnectFrom(b, a)
			console.log("disconnecting " + b + " from " + a + "("+graph.get(a)+")")
		})
	}

	function connectSpecified(a,b) {
		function half(a,b) {
			var aValues = connectionSet(a)
			aValues[b] = null // append an item into set: map to dummy value
			setConnections(a, aValues)
		}
		
		//These checks are not needed from a graphical envirnoment, 
		// which will have no option to select non-existing for connection
		if (graph.get(a) == null) throw new Error("node " + a + " does not exist")
		if (graph.get(b) == null) throw new Error("node " + b + " does not exist")
		
		return compound(function() {
			half(a,b)
			half(b,a)
		})
	}
	function initializeModel(model) {
		function append(title, dict) {
			model.getRoot().set(title, model.createMap(dict));
		}
		append('configuration', {nodeIdentity:100, edgeIdntity:100, separator: ','})
		append('graph', {a:"b,c", b:"a", c:"a",m:""})
	}

	function _onFileLoaded(doc) {
		model = doc.getModel() ; modelSeparator = model.getRoot().get('configuration').get('separator')
		graph = model.getRoot().get('graph');
		
		function onMapValueChanged (evt) {
			//console.log("event = " + showAll(evt))
			
			// null => "" when created
			// "something" => null when deleted
			if (evt.newValue == null) console.log("remote event: deleted " + evt.property)
			else if (evt.oldValue == null) console.log("remote event: created " + evt.property)
			else console.log("remote event: model updated " +  evt.property + ": " + evt.oldValue + " => " + evt.newValue)
			printAll()
		}

		graph.addEventListener(
			gapi.drive.realtime.EventType.VALUE_CHANGED,
			onMapValueChanged);
		onFileLoaded(doc)
	/*      textArea2.onkeyup = function() {
		string.setText(textArea2.value);
	  };*/
	  printAll()

	  undoButton.onclick = function(e) {
		model.undo();
	  };
	  redoButton.onclick = function(e) {
		model.redo();
	  };

	  // Add event handler for UndoRedoStateChanged events.
	  var onUndoRedoStateChanged = function(e) {
		undoButton.disabled = !e.canUndo;
		redoButton.disabled = !e.canRedo;
	  };
	  model.addEventListener(gapi.drive.realtime.EventType.UNDO_REDO_STATE_CHANGED, onUndoRedoStateChanged);
	}

	this.startRealtime = function() {

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
}