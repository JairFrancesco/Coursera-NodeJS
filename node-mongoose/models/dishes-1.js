var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a schema
var dishSchema = new Schema({
	name:{type:String, required:true, unique:true},
	description:{type:String, required:true}
	}, {timestamps:true});

//The schema is useless so far
//We need to create a model using it
var Dishes = mongoose.model('Dish', dishSchema);

//Make this available to our Node applications
module.exports = Dishes;
