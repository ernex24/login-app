const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  image: {
    type: String
  },
  country: {
    type: String
  },
  city: {
    type: String
  },
  postalcode: {
    type: String
  },
  bio: {
    type: String
  },
  phone: {
    type: String
  },
  social: {
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});
const Profile = mongoose.model('Profile', ProfileSchema)
module.exports = Profile
