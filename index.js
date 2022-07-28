const express = require('express');
const port = 8000;
const app = express();
const path = require('path');

app.use(express.static('assets'));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/',require('./routers'));

app.listen(port , function(err){
    if(err){ console.log(`Error Occurs while running server on port ${port}`);}
    console.log('Todo App  server running...');
});