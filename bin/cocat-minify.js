// NodeJS utility for concat and minify files
// Inspired in http://stackoverflow.com/a/6540388/840635
(function(){
	'use strict';
	
	var fs = require('fs');
	var uglify = require("uglify-js");
	
	var destFileName='rgt-reusable-module.min.js';
	
	var scriptsFileNames = getFiles('../module', scriptsFileNames);
	console.log('Filename list of files to be uglified and minified:');
	console.log(scriptsFileNames);
	
	var uglified = uglify.minify(scriptsFileNames);
	
	fs.writeFile('../dist/'+destFileName, uglified.code, function (err){
	  if(err) {
	    console.log(err);
	  } else {
	    console.log("Script generated and saved:", destFileName);
	  }      
	});
	
	/**
	 * get the filename list in a dir. 
	 * copy-pasted from 
	 */
	function getFiles (dir, files_){
	    files_ = files_ || [];
	    var files = fs.readdirSync(dir);
	    for (var i in files){
	        var name = dir + '/' + files[i];
	        if (fs.statSync(name).isDirectory()){
	            getFiles(name, files_);
	        } else {
	            files_.push(name);
	        }
	    }
	    return files_;
	}
})()