/**
 * @namespace Realtime client utilities namespace.
 */
var rtclient = rtclient || {}


/**
 * MIME type for newly created Realtime files.
 * @const
 */
appId = 
	//"alpinedogfish833" 
	"alpine-dogfish-833"

rtclient.REALTIME_MIMETYPE = 'application/vnd.google-apps.drive-sdk'
function mimeType() {
	return rtclient.REALTIME_MIMETYPE + "." + realtimeOptions.clientId.split('-')[0]
}

/**
 * Parses the hash parameters to this page and returns them as an object.
 * @function
 */
rtclient.getParams = function() {
  var params = {};
  var hashFragment = window.location.hash;
  if (hashFragment) {
    // split up the query string and store in an object
    var paramStrs = hashFragment.slice(1).split("&");
    for (var i = 0; i < paramStrs.length; i++) {
      var paramStr = paramStrs[i].split("=");
      params[paramStr[0]] = unescape(paramStr[1]);
    }
  }
  console.log("params = " + showAll(params));
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
rtclient.getOption = function(options, key, defaultValue) {
  var value = options[key] == undefined ? defaultValue : options[key];
  if (value == undefined) {
    console.error(key + ' should be present in the options.');
  }
  console.log(value);
  return value;
}


/**
 * Creates a new Authorizer from the options.
 * @constructor
 * @param options {Object} for authorizer. Two keys are required as mandatory, these are:
 *
 *    1. "clientId", the Client ID from the console
 */
rtclient.Authorizer = function(options) {
  this.clientId = rtclient.getOption(options, 'clientId');
  // Get the user ID if it's available in the state query parameter.
  this.authButton = document.getElementById(rtclient.getOption(options, 'authButtonElementId'));
}


/**
 * Start the authorization process.
 * @param onAuthComplete {Function} to call once authorization has completed.
 */
rtclient.Authorizer.prototype.start = function(onAuthComplete) {
  var _this = this;
  	console.log("authorizer.starting")
  gapi.load('auth:client,drive-realtime', function() {
  	console.log("authorizer.started")
    _this.authorize(onAuthComplete);
  });
}

	function showAll(dict) {
		var res = ""
		for (var i in dict)
			res += i + " => " + dict[i] + ", "
		return res
	}

/**
 * Reauthorize the client with no callback (used for authorization failure).
 * @param onAuthComplete {Function} to call once authorization has completed.
 */
rtclient.Authorizer.prototype.authorize = function(onAuthComplete) {
  var clientId = this.clientId;
  var _this = this;

  	console.log('authorizer.authorizing: client id = ' + clientId)

  var handleAuthResult = function(authResult) {
	function log(title) {
		console.log('auth '+title+' = ' + showAll(authResult))
		console.log(' error status = ' + showAll(authResult.status))
	}
    if (authResult && !authResult.error) {
		log("ok")
      _this.authButton.disabled = true;
      //_this.fetchUserId(onAuthComplete);
	  onAuthComplete()
    } else {
		log("error")
      _this.authButton.disabled = false;
      _this.authButton.onclick = function() {authorize(false)};
    }
  };

	function auth(access) { return "https://www.googleapis.com/auth/drive." + access }

  function authorize(nopopup) {
    gapi.auth.authorize({
      client_id: clientId,
      scope: [
		auth('install'), // * OAuth 2.0 scope for installing Drive Apps.
		auth('file') // * OAuth 2.0 scope for opening and creating files.
        //rtclient.OPENID_SCOPE = 'openid' // * OAuth 2.0 scope for accessing the user's ID.
		//,auth('file'), auth('readonly'), auth('metadata.readonly'), auth('appdata')
      ],
      //user_id: userId,
		immediate: 
			nopopup // true try with no popups first
					//false // authorizeWithPopup
    }, handleAuthResult);
	}
  
  authorize(true)
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
rtclient.parseState = function(stateParam) {
  try {
    var stateObj = JSON.parse(stateParam);
    return stateObj;
  } catch(e) {
    return null;
  }
}


/**
 * Handles authorizing, parsing query parameters, loading and creating Realtime
 * documents.
 * @constructor
 * @param options {Object} options for loader. Four keys are required as mandatory, these are:
 *
 *    1. "clientId", the Client ID from the console
 *    2. "initializeModel", the callback to call when the model is first created.
 *    3. "onFileLoaded", the callback to call when the file is loaded.
 *
 * and one key is optional:
 *
 *    1. "defaultTitle", the title of newly created Realtime files.
 */
rtclient.RealtimeLoader = function(options) {
  // Initialize configuration variables.
  this.onFileLoaded = rtclient.getOption(options, 'onFileLoaded');
  this.initializeModel = rtclient.getOption(options, 'initializeModel');
  this.registerTypes = rtclient.getOption(options, 'registerTypes', function(){});
  this.afterAuth = rtclient.getOption(options, 'afterAuth', function(){})
  this.autoCreate = rtclient.getOption(options, 'autoCreate', false); // This tells us if need to we automatically create a file after auth.
  this.defaultTitle = rtclient.getOption(options, 'defaultTitle', 'VisualDict');
  this.authorizer = new rtclient.Authorizer(options);
}


/**
 * Redirects the browser back to the current page with an appropriate file ID.
 * @param fileId the IDs of the files to open.
 *  @param userId {string} the ID of the user.
 */
rtclient.RealtimeLoader.prototype.redirectTo = function(fileId, reload) {

  // Naive URL construction.
  var newUrl = './#fileId=' + fileId;
  // Using HTML URL re-write if available.
  if (window.history && window.history.replaceState)
    window.history.replaceState("Google Drive Realtime API Playground", "Google Drive Realtime API Playground", newUrl);
  else
    window.location.href = newUrl;
	
  if (reload) location.reload(true)
	
  console.log('new URL without reload: ' + newUrl + "") // happens on first page load
  // We are still here that means the page didn't reload.
   gapi.drive.realtime.load(fileId, this.onFileLoaded, this.initializeModel, this.handleErrors);
}


/**
 * Starts the loader by authorizing.
 */
rtclient.RealtimeLoader.prototype.start = function() {
  // Bind to local context to make them suitable for callbacks.

  var _this = this;

  this.authorizer.start(function() {
    if (_this.registerTypes) {
      _this.registerTypes();
    }
    if (_this.afterAuth) {
      _this.afterAuth();
    }
    _this.load();
  });
}


/**
 * Handles errors thrown by the Realtime API.
 */
rtclient.RealtimeLoader.prototype.handleErrors = function(e) {
  if(e.type == gapi.drive.realtime.ErrorType.TOKEN_REFRESH_REQUIRED) {
    authorizer.authorize();
  } else if(e.type == gapi.drive.realtime.ErrorType.CLIENT_ERROR) {
    alert("An Error happened: " + e.message);
    window.location.href= "/";
  } else if(e.type == gapi.drive.realtime.ErrorType.NOT_FOUND) {
    alert("The file was not found. It does not exist or you do not have read access to the file.");
    window.location.href= "/";
  }
};


/**
 * Loads or creates a Realtime file depending on the fileId and state query
 * parameters.
 */
rtclient.RealtimeLoader.prototype.load = function() {
  var fileId = rtclient.params['fileId'];
  var state = rtclient.params['state'];

  // Creating the error callback.
  var authorizer = this.authorizer;

	console.log("RT.load, rclient.params=" + showAll(rtclient.params) + "")
  // We have file IDs in the query parameters, so we will use them to load a file.
  if (fileId) {
      gapi.drive.realtime.load(fileId, this.onFileLoaded, this.initializeModel, this.handleErrors);
    return;
  }

  // We have a state parameter being redirected from the Drive UI. We will parse
  // it and redirect to the fileId contained.
  else if (state) {
    var stateObj = rtclient.parseState(state);
    // If opening a file from Drive.
    if (stateObj.action == "open") {
      this.redirectTo(stateObj.ids[0]);
      return;
    }
  }

  if (this.autoCreate) {
    this.createNewFileAndRedirect();
  }
}


/**
 * Creates a new file and redirects to the URL to load it.
 */
rtclient.RealtimeLoader.prototype.createNewFileAndRedirect = function() {
  // No fileId or state have been passed. We create a new Realtime file and
  // redirect to it.
  
  var _this = this;
  var fname = this.defaultTitle
    gapi.client.load('drive', 'v2', function() {

	// Pick file automatically if one already exists
    gapi.client.drive.files.list({q:"mimeType = '"+mimeType()+"' and trashed=false"}).execute(function(resp) {
		// if next page token -- fetch another page
		console.log("already exist " + resp.items.length + " files, first file = " + showAll(resp.items[0]))
		if (resp.items.length > 0) {
			if (resp.items.length == 1) _this.redirectTo(resp.items[0].id);
			else pick()
		}
			  
		else 
			gapi.client.drive.files.insert({
			  'resource': {
				mimeType: rtclient.REALTIME_MIMETYPE,
				title: fname
			  }
			}).execute(function(file) {
				if (file.id) {
					console.log("after " + fname + " created with mime "+rtclient.REALTIME_MIMETYPE+" created, redirect file:" + file.id)
				  _this.redirectTo(file.id);
				}
				// File failed to be created, log why and do not attempt to redirect.
				else {
				  console.error('Error creating file.');
				  console.error(file);
				}
			}); // insert
	  }); // list

    }); // load gapi
	

}


function pick() {
	function main() {
		var token = gapi.auth.getToken().access_token;
		var view = new google.picker.View(google.picker.ViewId.DOCS);
		//var apiKey = "AIzaSyDQ1gwoXokw646856bONXwaAdPdXSbFf4k"
		view.setMimeTypes(mimeType());
		var picker = new google.picker.PickerBuilder()
		  .enableFeature(google.picker.Feature.NAV_HIDDEN)
		  //.setAppId(realtimeOptions.clientId.split('-')[0])
		  .setOAuthToken(token)
		  .addView(view)
		  //.setDeveloperKey(apiKey)
		  //.addView(new google.picker.DocsUploadView())
		  .setCallback(function(resp){
				//console.log("picked " + showAll(resp))
				//console.log("docs[0]" + showAll(resp.docs[0]))
				if (resp.action == 'picked') 
					rtclient.loaderInst.redirectTo(resp.docs[0].id, true);
			})
		  .build();
		picker.setVisible(true);
	}
	gapi.load('picker', {'callback': main});
}
