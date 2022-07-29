const mongoose = require('mongoose');
const schema =  mongoose.Schema({
    description : {
        type:String,
        required :true
    },
    category :{
        type:String,
    } ,
    date :{
        type:Date,
        required :true
    }
});

const todoSchema = mongoose.model('todoSchema',schema);
module.exports = todoSchema;