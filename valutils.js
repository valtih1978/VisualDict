ValUtils = {

	dictToStr: function (dict) {
		var res = ""
		for (var i in dict)
			res += i + " => " + dict[i] + ", "
		return res
	},

	// dict.keys() is not operational in my browser (Chrome 40)
	keys: function(dict) {
		var keys = [] ;  for(var key in dict) keys.push( key );
		return keys
	}
}