const todoSchema = require('../models/TodoSchema');

module.exports.homeAction = function(req , res ){
    res.render('home');
}


module.exports.addTask = function(req ,res){
    console.log(req.body);
    todoSchema.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    } , function( err , data){
        if(err){console.log('Error occur while storing the data'); return;}
        console.log("**********************",data);
    });

}