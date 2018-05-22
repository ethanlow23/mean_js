const mongoose = require('mongoose')
const TableSchema = new mongoose.Schema({
    name: {type: String, minlength: [3, 'name must have at least 3 characters']},
    type: {type: String, minlength: [3, 'type must have at least 3 characters']},
    description: {type: String, minlength: [3, 'description must have at least 3 characters']},
    skills: {type: [String], maxlength: [3, 'pet cannot have more than 3 skills']}
}, {timestamps: true});
module.exports = mongoose.model('Pet', TableSchema);