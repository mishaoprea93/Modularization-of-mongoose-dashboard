var mongoose = require("mongoose");

var AnimalSchema = new mongoose.Schema({
    animalName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
mongoose.model('Animal', AnimalSchema);
var Animal = mongoose.model("Animal");