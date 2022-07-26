const express = require('express');
const port = 8000;
const app = express();

app.get('/',require('./routers'));

app.listen(port , function(err){
    if(err){ console.log(`Error Occurs while running server on port ${port}`);}
    console.log('Todo App  server running...');
});