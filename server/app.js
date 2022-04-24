var express = require('express');



var app = express();
var port = 8000;

app.listen(port, (err, res)=>{
    if(err)
    {
        console.log('Server error: ' + err);
    }
    else
    {
        console.log('Server started on port: ' + port);
    }
});