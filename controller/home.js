const todoSchema = require('../models/TodoSchema');

module.exports.homeAction = function(req , res ){
    todoSchema.find({},function(err,data){
        if(err){console.log('Error Occur While fetching from Database'); return;}
        return res.render('home',{
            tasksArrObj:data
        });
    });
}


module.exports.addTask = function(req ,res){
    todoSchema.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    } , function( err , data){
        if(err){console.log('Error occur while storing the data'); return;}
    });

    res.redirect('back');
}

module.exports.delTask = function(req , res){
    // console.log(req.query);
    todoSchema.findByIdAndDelete(req.query.id,function(err){
        if(err){ console.log('Error occur while deleting');}
    })
    return res.redirect('/');
} 