const response = require('./response');
const labelModel=require('../model/label');
const taskModel=require('../model/task');


//Create new Label
exports.createLabel = (req, res, next) => {
    labelModel.createLabel(req.body).then((labelData)=>{
        response.send201(res,labelData);
    }).catch(err=>{
        response.send500(res,err);
    })
}

//Delete Label
exports.deleteLabel = (req, res, next) => {
    labelModel.deleteLabel(req.params.id).then((labelData)=>{
        response.send200(res,"Sucessfully Label Deleted");
    }).catch(err=>{
        response.send500(res,err);
    })
}

//Update Label
exports.updateLabel = (req, res, next) => {
    labelModel.editLabel(req.params.id,req.body).then((labelData)=>{
        response.send200(res,labelData);
    }).catch(err=>{
        response.send500(res,err);
    })
}

//Create New Task
exports.createTask = (req, res, next) => {
    taskModel.createTask(req.body).then((taskData)=>{
        response.send201(res,taskData);
    }).catch(err=>{
        response.send500(res,err);
    })
}

//Delete Task
exports.deleteTask = (req, res, next) => {
    taskModel.deleteTask(req.params.id).then((labelData)=>{
        response.send200(res,"Sucessfully Task Deleted");
    }).catch(err=>{
        response.send500(res,err);
    })
}

//Update Task
exports.updateTask = (req, res, next) => {
    taskModel.editTask(req.params.id,req.body).then((labelData)=>{
        response.send200(res,labelData);
    }).catch(err=>{
        response.send500(res,err);
    })
}

//Move task/tasks from one label to other
exports.moveTask = (req, res, next) => {
    let labelId=req.params.labelId;
    let array=req.body.taskId;
   
    try{
    for(let i=0;i<array.length;i++){
        taskModel.moveLabel(array[i],labelId);
    }
    response.send200(res,"Update Label sucessfully");
}catch(err){
    response.send500(res,err);
}
   
}

//Get All Task
exports.getAllTask = (req, res, next) => {
    taskModel.getAllTask().then((labelData)=>{
        response.send200(res,labelData);
    }).catch(err=>{
        response.send500(res,err);
    })
}

//Get All Label
exports.getAllLabel = (req, res, next) => {
    labelModel.getAllLabel().then((labelData)=>{
        response.send200(res,labelData);
    }).catch(err=>{
        response.send500(res,err);
    })
}