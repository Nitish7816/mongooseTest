'use strict';
var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
mongoose.connect('mongodb://localhost:27017/myappdatabase', function(){
    //console.log('Db Connected Successfully')
});
var User=require('./server');
var db=mongoose.connection;
var app=express();
app.use(bodyParser.json());
app.get('/', function(req,res){
    User.find({}, function(err,data){
        if(!err){
            res.json(data);
        }
    });
});
app.post('/', function(req,res){
    console.log(req.body);
    var insertData=new User(req.body);
    insertData.save(function(){
        res.status(201).send(insertData)
    })

});
app.listen(3000);
console.log("server started at port:3000");
module.exports=app;
