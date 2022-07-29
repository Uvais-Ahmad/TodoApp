const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TodoApp');

//here data base is init 
const db = mongoose.connection;

//check any error occur or not
db.on('error',console.error.bind(console,'There is an error while connection with the databse'));

//if not error then open the connction
db.once('open' , ()=>{
    console.log('Successfully connected databse of Todo');
});
