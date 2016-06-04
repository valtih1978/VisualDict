
function Controller(onFileLoaded) {

	var me = this
	
	this.graph = this.model = undefined
	this.separator = undefined
	
	validate = function (name, mustExist) {
		name = name.trim()
		if (name.indexOf(me.separator) != -1) throw new Error( "Separator is forbidden in the words")
		if (name.length == 0) throw new Error("Name must be not empty")
		if (mustExist != undefined && mustExist != (me.graph.get(name) != null))
			throw new Error("node `" + name + (mustExist ? ' must exist' : ' must not exist' ))
		return name
	}
	
	this.createNode = function(name, conns) { name = validate(name)
		if (me.graph.get(name) == null) me.graph.set(name, "")
		me.connectAll(name, conns) ; return name
	}
	
	this.connectionSet = function(key) {
		var str = me.graph.get(key)
		return new Set((str == "") ? [] : str.split(me.separator))
	}

	this.compound = function(action) {
		me.model.beginCompoundOperation();
		try {
			return action()
		} finally {
			me.model.endCompoundOperation();
		}
	}
	
	this.mergeRename = function(toMerge, target) {
		var target = validate(target)
		return me.compound(function() {
			var conns = toMerge.reduce( (acc, item) => acc.concat([...me.deleteNode(item).connectedTo]), [])
			conns = conns.filter(x => !new Set(toMerge).has(x))
			me.createNode(target, conns) ; return [target, conns]
		})
	}
	
	this.deleteNode = function(name) {
		name = validate(name, true)
		return me.compound(function () {
			// can we combine multiple update requests into one in google realtime?
			var connectedTo = me.connectionSet(name)
			for (let that of connectedTo) disconnectOneway(that, name)
				
			me.graph.delete(name);
			return {name:name, connectedTo:connectedTo}
		})
	}
	
	disconnectOneway = function(fromKey, entry) {
		updateConnections(fromKey, function(connections){connections.delete(entry); return connections})
	}
	
	this.disconnectNodes = function(a, b) {
		a = validate(a, true) ; b = validate(b, true)
		return me.compound(function() {
			disconnectOneway(a, b)
			disconnectOneway(b, a)
		})
	}
	
	this.removeEdge = function(edgeId) {
		var pair = edgeId.split(me.separator)
		me.disconnectNodes(pair[0], pair[1])
	}

	function updateConnections(node,updateFunc) {
		var values = Array.from(updateFunc(me.connectionSet(node))).join(me.separator)
		me.graph.set(node, values)
	}

	this.connectAll = function(node, conns) { for (let that of conns) me.connect(that, node) }
	
	this.connect = function(a,b) {
		a = validate(a, true) ; b = validate(b, true)
		
		// double connections dubious and create problems in renaming. 
		// Renaming removes the connections, creates the node with new name and reconnects. It will try to connect to deleted, old name and fail. Do not permit the self-refs to happen at all.
		if (a == b) return //throw new Error( "Cannot create self reference. Requested one for " + )
			
		function half(a,b) { updateConnections(a, function(connections){return connections.add(b)}) }
		
		//These checks are not needed from a graphical envirnoment, 
		// which will have no option to select non-existing for connection
		//console.log(a + ":" +b+ " are mapped to " + me.graph.get(a) + ":" + me.graph.get(b))
		//if (me.graph.get(a) == null) throw new Error("node " + a + " does not exist") //http://stackoverflow.com/questions/37553251/updating-just-created-collaborative-map-entries
		//if (me.graph.get(b) == null) throw new Error("node " + b + " does not exist")
		
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
			
			onFileLoaded(doc)

		}
		
		new rtclient.RealtimeLoader({
			initializeModel: initializeModel, // Function to be called when a Realtime model is first created.
			onFileLoaded: _onFileLoaded, // Function to be called every time a Realtime file is loaded.
		});
	}
	
	this.start()
}

