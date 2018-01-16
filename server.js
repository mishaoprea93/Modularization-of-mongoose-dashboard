var express = require("express");
var app = express();
var path = require("path");
var bp = require("body-parser");
var mongoose = require("mongoose");
var port = 8000;
var session = require("express-session");

app.use(express.static(path.join(__dirname, "/client/static")));
app.use(bp.urlencoded());
app.use(session({ secret: "secret_key" }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/client/views"));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, function() {
    console.log("listening on port 8000!");
})