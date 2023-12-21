
const { Schema, model} = require('mongoose');

const TasksSchema = new Schema({
    aouthorName: {
        type: String,
        required: true
    },
    aouthorEemail:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    deadline:{
        type: String
    },
    priority:{
        type: String
    },
    status: {
        type: String
    }
    
});

const Tasks = model('Tasks', TasksSchema);

module.exports = Tasks;


