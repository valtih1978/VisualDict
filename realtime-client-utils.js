/**
 * @namespace Realtime client utilities namespace.
 */
var rtclient = rtclient || {}

/**
 * MIME type for newly created Realtime files.
 * @const
 */

rtclient.REALTIME_MIMETYPE = 'application/vnd.google-apps.drive-sdk'
rtclient.clientId = '1088706429537-4oqhqr7o826ditbok23sll1rund1jim1.apps.googleusercontent.com' // * Client ID from the console.
rtclient.authButton = function() {return document.getElementById('authorizeButton');}

function mimeType() {
	return rtclient.REALTIME_MIMETYPE + "." + rtclient.clientId.split('-')[0]
}

function style(el, value) {
	var value = value.split(";") ; for (var s in value) {
		var pair = value[s].split(":") ; el.style[pair[0].trim()] = pair[1].trim()
	}
}

rtclient.dialog = (function() {
	var dialog = document.createElement("div"); dialog.id = "rtclient_file_picker_dialog"
	// el.style = // has no effect
	style(dialog, "visibility: hidden; position: fixed; left: 0px; top: 0px; width:100%; height:100%; z-index: 1000")
	var content = document.createElement("div"); content.id = "rtclient_file_picker_content"
	style(content, "height:100%; background:white; margin:0 auto; overflow:auto") ; dialog.appendChild(content)
	document.body.appendChild(dialog); return dialog; }())


/**
 * Parses the hash parameters to this page and returns them as an object.
 * @function
 */
rtclient.getParams = function() {
  var params = {};
  var hashFragment = window.location.hash;
  if (hashFragment) { // split up the query string and store in an object
    hashFragment.slice(1).split("&").map(paramStr => paramStr.split("=")).forEach(([name, value]) => 
	params[name] = unescape(value))}
  console.log("params = " + Object.keys(params));
  return params;
}


/**
 * Instance of the query parameters.
 */
rtclient.params = rtclient.getParams();


/**
 * Fetches an option from options or a default value, logging an error if
 * neither is available.
 * @param options {Object} containing options.
 * @param key {string} option key.
 * @param defaultValue {Object} default option value (optional).
 */

function summarize(msg) {if (typeof Summary != "undefined") Summary.innerHTML += msg + "<br>"; else console.log(msg)}
rtclient.Authorizer = function(onAuthComplete) { var me = this; 
  me.authorize(onAuthComplete)
}

/**
 * Reauthorize the client with no callback (used for authorization failure).
 * @param onAuthComplete {Function} to call once authorization has completed.
 */

rtclient.Authorizer.prototype.authorize = function(onAuthComplete) {

	var handleAuthResult = function(authResult) {
		function log(title) {
			console.log('auth '+title+' = ' + JSON.stringify(authResult))//Object.keys(authResult))
			console.log(' error status = ' + JSON.stringify(authResult.status))
		}
		let ab = rtclient.authButton()
		if (authResult && !authResult.error) { log("ok")
			ab.style.display = 'none'; //_this.fetchUserId(onAuthComplete);
			summarize('Authorized, ' + (onAuthComplete ? 'has to load some file' : 'has nothing else to do') );
		  if (onAuthComplete) onAuthComplete()
		} else { log("error")
		  ab.style.display = 'block'; ab.onclick = function() {authorize(true)};
		}
	};

  function authorize(popup) {
	summarize(`Authorizing(${popup})`)
    gapi.auth.authorize({
      client_id: rtclient.clientId,
	  scope: ['install', 'file'].map(function (access) { return "https://www.googleapis.com/auth/drive." + access }),
      //user_id: userId,
		immediate: !popup // true try with no popups first
					//false // authorizeWithPopup
    }, handleAuthResult);
	}
  
  authorize(false)
  
  // refresh interval 1800000 = 30 min. Reauthorizing with this code helped me when connection was bad and re-authorizatiion unreliable.
  // But, once authorizer was corrected and unsaved indicator introduced, I think that this is not needed anymore.
  //setInterval(function() {authorize(false)}, 1800000);
}


/**
 * Fetch the user ID using the UserInfo API and save it locally.
 * @param callback {Function} the callback to call after user ID has been
 *     fetched.
 */
/*rtclient.Authorizer.prototype.fetchUserId = function(callback) {
  var _this = this;
  gapi.client.load('oauth2', 'v2', function() {
    gapi.client.oauth2.userinfo.get().execute(function(resp) {
      if (resp.id) {
        _this.userId = resp.id;
      }
      if (callback) {
        callback();
      }
    });
  });
};
*/


/**
 * Fetches the metadata for a Realtime file.
 * @param fileId {string} the file to load metadata for.
 * @param callback {Function} the callback to be called on completion, with signature:
 *
 *    function onGetFileMetadata(file) {}
 *
 * where the file parameter is a Google Drive API file resource instance.
 */
/*rtclient.getFileMetadata = function(fileId, callback) {
	alert('requesting metadata file id ')
  gapi.client.load('drive', 'v2', function() {
    gapi.client.drive.files.get({
      'fileId' : fileId
    }).execute(callback);
  });
}
*/

/**
 * Parses the state parameter passed from the Drive user interface after Open
 * With operations.
 * @param stateParam {Object} the state query parameter as an object or null if
 *     parsing failed.
 */
rtclient.parseState = function(stateParam) { try { return JSON.parse(stateParam) } catch(e) { return null } }
rtclient.authorizer = null // loaders will use this authorizer. We going to have multiple loaders how share a single authorizer.

rtclient.RealtimeLoader = function(options) { this.options = options; me = this

	function decideWhatToLoadWhenAuthorized() {
		
		var [fileId, state] = ['fileId', 'state'].map(key => rtclient.params[key])

		console.log("Deciding what to load with rclient.params=" + JSON.stringify(rtclient.params) + "")
		// We have file IDs in the query parameters, so we will use them to load a file.
		if (fileId) return me.loadFile(fileId)

		// We have a state parameter being redirected from the Drive UI. We will parse
		// it and redirect to the fileId contained.
		else if (state) { // If opening a file from Drive
			var stateObj = rtclient.parseState(state);
			if (stateObj.action == "open") return me.redirectTo(stateObj.ids[0]);
		}
		if (me.options.initializeModel) me.selectOrCreateNew()
		else throw new Error("We do not have the document Id")
	} ; (rtclient.authorizer ? f => f() : f => rtclient.authorizer = new rtclient.Authorizer(f)) (decideWhatToLoadWhenAuthorized)
} //Handles authorizing, parsing query parameters, loading and creating Realtime documents.

/**
 * Redirects the browser back to the current page with an appropriate file ID.
 * @param fileId the IDs of the files to open.
 *  @param userId {string} the ID of the user.
 */
rtclient.RealtimeLoader.prototype.redirectTo = function(fileId, reload) {

  // Naive URL construction.
  rtclient.dialog.style.visibility = 'hidden'
  var newUrl = '#fileId=' + fileId;
  // Using HTML URL re-write if available.
  if (window.history && window.history.replaceState)
    window.history.replaceState("Google Drive Realtime API Playground", "Google Drive Realtime API Playground", newUrl);
  else window.location.href = newUrl;
	
  if (reload) location.reload(true)
	
  console.log('new URL without reload: ' + newUrl + "") // happens on first page load
  // We are still here that means the page didn't reload.
   this.loadFile(fileId);
}

rtclient.RealtimeLoader.prototype.loadFile = function(fileId, initializer, onLoaded) {
	initializer = initializer || this.options.initializeModel ; onLoaded = onLoaded || this.options.onFileLoaded
	if (!controller.graph) summarize('Loading your realtime file') // display only on first load
	
	function handleErrors(e) { with(gapi.drive.realtime.ErrorType) {switch(e.type) {
		case TOKEN_REFRESH_REQUIRED: rtclient.authorizer.authorize() ; break
		case CLIENT_ERROR: throw e ; window.location.href= "/"; break
		case NOT_FOUND: alert("The file was not found. It does not exist or you do not have read access to the file.");
			window.location.href= "/"; break
		default: throw new Error(e)
	}}}

  gapi.drive.realtime.load(fileId, onLoaded, initializer, handleErrors);
}

// No fileId or state have been passed. We create a new Realtime file and redirect to the URL to load it.
rtclient.RealtimeLoader.prototype.selectOrCreateNew = function() { var me = this
  
	makeDiv((html, textNode, close) => {
		var b = textNode("b") ; var p = text => textNode("p")('') ; var h = textNode("h1")

		var h1 = h("Fetching list of available files")

		listFiles(function(resp) { // Pick file automatically if one already exists
			// if next page token -- fetch another page
			h1.parentNode.innerHTML = "<h2>Click a row to select a dictionary-DB file or create a new one</h2>"
				+ 'Clicking the first (name) column will redirect you to the Google Drive' ; p()

		if (resp.items.length > 0) { var table = html('table', {border: 1})
			var fields = // Object.keys(resp.items[0]) // all available fields
				["title", "selfLink", "mimeType", "createdDate", "modifiedDate", "modifiedByMeDate", "quotaBytesUsed", "version"]
			function row(fieldValue) { var tr = table.insertRow(0)
				for (var fld in fields) { var field = fields[fld];
				   tr.insertCell(fld).appendChild(document.createTextNode(fieldValue(field)));
				} ; return tr
			}
			resp.items.forEach ( file => { var tr = row(field => file[field])
				tr.onclick = function(e) { if (e.srcElement.cellIndex == 0 )
					window.open('https://drive.google.com/open?id=' + file.id); else me.redirectTo(file.id, true)
				}
			}) ; row(field => field) ; html("br", {})
		}
		b("New file: ") ; html("input", {id: 'NewFileName', value: 'VisualDict-' + (resp.items.length+1)}) ; 
		function createNew(name) {createNewFile(name, function(file) {
			console.log(name + " with mime "+rtclient.REALTIME_MIMETYPE+" created, redirect to " + file.id)
			 me.redirectTo(file.id, true);
		})}
		b(" ") ; html("button", {}, "Create").onclick = () => createNew(NewFileName.value) ; p()
		html("button", {}, "Demo Rus-Eng dictionary").onclick = function(){me.redirectTo("0B00--A0eRH1JdldBdkU0MUVmUEk", true)}
			b(" (50k words, read only)") ; html("br", {})
		html("button", {}, "Cancel").onclick = close ; b(" ")
		html("a", {href:"https://drive.google.com/drive/#search?q=app:%22Word Graph Dictionary Visualizer%22", target:"_blank"}, "If you wish to rename/edit files, resort to the google drive")
			/*if (resp.items.length > 1) pick();
			else if (resp.items.length == 1) _this.redirectTo(resp.items[0].id);
			else */
		
	}); // list

	}); // div
	

}

function listFiles(handler) {
	gapi.client.drive.files.list({q:"mimeType = '"+mimeType()+"' and trashed=false"}).execute(handler)
}

function newFileRes(title) {return {'resource': { mimeType: rtclient.REALTIME_MIMETYPE, title: title}}}
function createNewFile(fname, whenCreated) {
	gapi.client.drive.files.insert(newFileRes(fname)).execute(function(file) {
			if (file.id) whenCreated(file)
			else {// File failed to be created, log why and do not attempt to redirect.
			  console.error('Error creating file.'); console.error(file);
			}
		}); // create
}

rtclient.RealtimeLoader.prototype.GooglePick = function() { var me = this
	function main() {
		var token = gapi.auth.getToken().access_token;
		var view = new google.picker.View(google.picker.ViewId.DOCS);
		//var apiKey = "AIzaSyDQ1gwoXokw646856bONXwaAdPdXSbFf4k"
		view.setMimeTypes(mimeType());
		var picker = new google.picker.PickerBuilder()
		  .enableFeature(google.picker.Feature.NAV_HIDDEN)
		  //.setAppId(realtimeOptions.split('-')[0])
		  .setOAuthToken(token)
		  .addView(view)
		  //.setDeveloperKey(apiKey)
		  //.addView(new google.picker.DocsUploadView())
		  .setCallback(function(resp){if (resp.action == 'picked') me.redirectTo(resp.docs[0].id, true);})
		  .build();
		picker.setVisible(true);
	}
	gapi.load('picker', {'callback': main});
}


