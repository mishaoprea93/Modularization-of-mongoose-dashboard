var animals = require("./../controllers/animalcontroller.js");
module.exports = function(app) {
    app.get("/", function(req, res) {
        animals.show(req, res);
    });
    app.get("/mongoose/new", function(req, res) {
        res.render("add");
    });
    app.post("/mongoose/process", function(req, res) {
        animals.add(req, res);
    });
    app.get("/mongoose/show/:uid", function(req, res) {
        animals.find(req, res);
    });
    app.get("/mongoose/destroy/:uid", function(req, res) {
        animals.destroy(req, res);
    });
    app.get("/mongoose/update/:uid", function(req, res) {
        animals.update_page(req, res);
    })
    app.post("/mongoose/update/process/:uid", function(req, res) {
        animals.update(req, res);
    });

}