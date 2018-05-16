var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema= new Schema({
    name: {
        type: String
    },
    age:{
        type: String
    },
    address:{
        type: String
    }
});
var User = mongoose.model('User', userSchema);
module.exports=User;
