var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');
module.exports = {
    show: function(req, res) {
        Animal.find({}, function(err, animal) {
            res.render("index", { animals: animal });
        })
    },
    add: function(req, res) {
        var animal = new Animal({
            animalName: req.body.animalName,
            description: req.body.description
        });
        animal.save(function(err) {
            if (err) {
                console.log('something went wrong');
                res.redirect("/mongoose/new")
            } else {
                console.log('successfully added an animal!');
                res.redirect("/");
            }
        })
    },
    find: function(req, res) {
        var id = req.params.uid;
        Animal.findById(id, function(err, animal) {
            console.log(animal);
            res.render("display", {
                animal: animal
            })
        })
    },
    destroy: function(req, res) {
        var id = req.params.uid;
        Animal.findByIdAndRemove(id, function(err) {
            res.redirect("/");
        })
    },
    update_page: function(req, res) {
        var id = req.params.uid;
        Animal.findById(id, function(err, animal) {
            console.log(animal);
            res.render("edit", {
                animal: animal
            })
        })
    },
    update: function(req, res) {
        Animal.findById(req.params.uid, function(err, animal) {
            animal.animalName = req.body.animalName;
            animal.description = req.body.description;
            animal.save({
                new: true
            }, function(err) {
                if (err) {
                    console.log('ERROR!');
                } else {
                    res.redirect("/");
                }
            });
        })
    },


}