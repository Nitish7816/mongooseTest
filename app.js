var mongoose=require('mongoose');
var User = require('./server');
mongoose.connect('mongodb://localhost:27017/myappdatabase');
var userOne=new User({
    name:"abc",
    age:25,
    address:"delhi"
})
userOne.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully!');
});
