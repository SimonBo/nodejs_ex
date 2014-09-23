var fs = require('fs')
var path = require('path')
var file = process.argv[2]
var extension = process.argv[3]

fs.readdir(file, function(err, list){
	for (var i = 0; i <= list.length; i++) {
		var file_ext = path.extname(list[i]);
		if (file_ext === extension) {
			console.log(list[i]);
		};
	};

});

