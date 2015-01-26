var graph ; var model ; var modelSeparator
function validateName(name) {
	name = name.trim()
	if (name.indexOf(modelSeparator) != -1) throw new Error( "Separator is forbidden in the words")
	if (name.length == 0) throw new Error("Name must be not empty")
	if (graph.get(name)) throw new Error("node `" + name + "` already exists")
	return name
}
function createNode(name) {
	graph.set(name, "");
}
function listConnections(key) {
	var str = graph.get(key)
	return (str == "") ? [] : str.split(modelSeparator)
}

// dict.keys() is not operational in my browser (Chrome 40)
function keys(dict) {
	var keys = [] ;  for(var key in dict) keys.push( key );
	return keys
}

function connectionSet(key) {
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
function renameNode() {
	var newName = validateName(bval())
	return compound(function() {
		var mustConnectTo = deleteNode()
		console.log("deleted connections with " + mustConnectTo)
		createNode(newName)
		for (i in mustConnectTo)
			connectSpecified(mustConnectTo[i], newName)
	})
}
function deleteNode() {
	return compound(function() {
		// can we combine multiple update requests into one in google realtime?
		var connectedTo = listConnections(aval())
		for (i in connectedTo)
			disconnectFrom(connectedTo[i], aval())
			
		graph.delete(aval());
		return connectedTo
	})
}
function disconnectFrom(fromKey, entry) {
	//console.log("deleted " + endtry + " from " + fromKey)
	var connections = connectionSet(fromKey)
	delete connections [entry]
	setConnections(fromKey, connections)
}
function setConnections(key, dict) {
	console.log("storing " + dict.length + " values into " +key  + ": " + keys(dict).join(modelSeparator))
	graph.set(key, /*dict.keys()*/keys(dict).join(modelSeparator))
}

function disconnectNodes() {
	return compound(function() {
		disconnectFrom(aval(), bval())
		disconnectFrom(bval(), aval())
		console.log("disconnecting " + bval() + " from " + aval() + "("+graph.get(aval())+")")
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

function onMapValueChanged (evt) {
	//console.log("event = " + showAll(evt))
	
	// null => "" when created
	// "something" => null when deleted
	if (evt.newValue == null) console.log("remote event: deleted " + evt.property)
	else if (evt.oldValue == null) console.log("remote event: created " + evt.property)
	else console.log("remote event: model updated " +  evt.property + ": " + evt.oldValue + " => " + evt.newValue)
	printAll()
}

function initializeModel (model) {
	function append(title, dict) {
		model.getRoot().set(title, model.createMap(dict));
	}
	append('configuration', {nodeIdentity:100, edgeIdntity:100, separator: ','})
	append('graph', {a:"b,c", b:"a", c:"a",m:""})
}

function onFileLoadedInternal(doc) {
	model = doc.getModel() ; modelSeparator = model.getRoot().get('configuration').get('separator')
	graph = model.getRoot().get('graph');
	graph.addEventListener(
		gapi.drive.realtime.EventType.VALUE_CHANGED,
		onMapValueChanged);
	onFileLoaded(doc)
/*      textArea2.onkeyup = function() {
	string.setText(textArea2.value);
  };*/

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
  printAll()
}

var realtimeOptions = {
  // * Client ID from the console.
  clientId: '1088706429537-4oqhqr7o826ditbok23sll1rund1jim1.apps.googleusercontent.com',
  
   //* The ID of the button to click to authorize. Must be a DOM element ID.
  authButtonElementId: 'authorizeButton',
  initializeModel: initializeModel, // Function to be called when a Realtime model is first created.
  autoCreate: true, // Autocreate files right after auth automatically.
  onFileLoaded: onFileLoadedInternal, // Function to be called every time a Realtime file is loaded.
  registerTypes: null, // No action to inityalize custom Collaborative Objects types.
  afterAuth: null // No action after authorization and before loading files.
}

function startRealtime() {
  rtclient.loaderInst = new rtclient.RealtimeLoader(realtimeOptions);
  rtclient.loaderInst.start();
}