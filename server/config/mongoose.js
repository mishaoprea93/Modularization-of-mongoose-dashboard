var mongoose = require("mongoose");
var fs = require("fs");
var path = require("path");

mongoose.connect('mongodb://localhost/mongoose');

var mp = path.join(__dirname, './../models');

fs.readdirSync(mp).forEach(function(file) {
    if (file.indexOf('.js') >= 0) {
        require(mp + '/' + file);
    }
});