const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
		},
	category: {
		type: String
    },
    subcategory: {
		type: String
    },
    brand: {
		type: String
    },
    model: {
		type: String
    },
    year: {
		type: Number
	},
	title: {
		type: String
	},
	price: {
		type: Number
    },
    currency: {
		type: String
	},
	description: {
		type: String
	},
	image1: {
		type: String
	},
	image2: {
		type: String
	},
	image3: {
		type: String
    },
    image4: {
		type: String
	},
	likes: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
			}
		}
	],
	date: {
		type: Date,
		default: Date.now
	}
});

AdSchema.virtual('profilead', {
  ref: 'Profile', // The model to use
  localField: 'name', // Find people where `localField`
  foreignField: 'city', // is equal to `foreignField`
});

module.exports = Ad = mongoose.model('Ad', AdSchema);
