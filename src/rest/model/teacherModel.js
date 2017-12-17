var mongoose = require('mongoose'); // this is ODM (Object Data Modeller) used to model and access mongodb
var Schema = mongoose.Schema;

// define "keys" (attribute name : attribute type, ....). below many option examples
var TeacherModel = new Schema({
    teacherId: { type: String, index: true, unique: true }, // will create an index in mongodb
    name: String,
    lastname: { type: String, trim: true, lowercase: true },
    title: { type: String, trim: true, lowercase: true, enum: ['professor', 'associate professor', 'assistant professor', 'professor emeritus'] },
    age: { type: Number, required: true, min: 10, max: 1000 },
    isFullTime: { type: Boolean, default: true },
    updatedOn: { type: Date, default: Date.now } // by default will have value like "2017-12-03T11:11:16.152Z"
});

// create model
module.exports = mongoose.model("Teacher", TeacherModel); // this returns a mongoose "model" and a collection called "teachers"(by default collection name is plural of model name, like for model name "Teacher", default collection name will be "teachers") will be created in mongodb
// if collection name is not provided, by default mongoose uses collection name that is lural of model name, like for model name "Teacher", default collection name will be "teachers". You can specify model and collection name as;
// module.exports = mongoose.model("Teacher", TeacherModel, "teachers");