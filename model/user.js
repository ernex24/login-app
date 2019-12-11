var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    }, 
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    date: {
        type: Date,
        default: Date.now
    }
  });

const User = mongoose.model('User', userSchema)
module.exports = User