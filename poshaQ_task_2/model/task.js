const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskName: {
        type: String,
        required: true
       
    },
    labelId: {
        type: mongoose.Schema.ObjectId,
        ref: "label"
      }

});

const taskModel= mongoose.model('task', taskSchema);
exports.taskModel = taskModel

//Create Task
exports.createTask = (task) => {
    return taskModel.create(task);
}

//Delete Task
exports.deleteTask = (id) => {
    return taskModel.findByIdAndRemove({
        _id: id
    }).exec()
}

//Edit Task
exports.editTask = (id, task) => {
    return taskModel.findByIdAndUpdate({
        _id: id
    }, task)
}

//Get All Task
exports.getAllTask=() =>{
    return taskModel.find({}).populate('labelId').exec();
}

//Move Task Label to Other
exports.moveLabel = (id, label) => {
    return taskModel.findByIdAndUpdate({
        _id: id
    },  {
        $set: {
            labelId: label
        }
    }).exec()
}