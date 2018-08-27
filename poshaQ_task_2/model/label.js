const mongoose = require('mongoose');

const labelSchema = mongoose.Schema({
    labelName: {
        type: String,
        required: true
       
    }

});

const labelModel = mongoose.model('label', labelSchema);
exports.labelModel = labelModel

//Create Label
exports.createLabel = (label) => {
    return labelModel.create(label)
}

//Delete Label
exports.deleteLabel = (id) => {
    return labelModel.findByIdAndRemove({
        _id: id
    }).exec()
}

//Edit Label
exports.editLabel = (id, label) => {
    return labelModel.findByIdAndUpdate({
        _id: id
    }, label)
}

//Get All Label
exports.getAllLabel=() =>{
    return labelModel.find({}).exec();
}