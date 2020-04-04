const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const request = require('request');

const Profile = require('../model/profile');
const User = require('../model/user');

const multer = require('multer');

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
    cb(null, './uploads/')
  },
	filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({ 
  storage: storage, 
  limits: {fileSize: 1024 * 1024 * 5},
  fileFilter: fileFilter
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
	'/',
	[
		auth
		// [
		//   check('country', 'Country is required')
		//     .not()
		//     .isEmpty(),
		//   check('city', 'City is required')
		//     .not()
		//     .isEmpty(),
		//     check('phone', 'Phone is required')
		//     .not()
		//     .isEmpty()
		// ]
	],
	upload.single('image'),
	async (req, res) => {
		console.log(req.file);
		// const errors = validationResult(req);
		// if (!errors.isEmpty()) {
		//   return res.status(400).json({ errors: errors.array() });
		// }

		const { country, city, postalcode, bio, phone, facebook, twitter, instagram, linkedin } = req.body;

		// Build profile object
		const profileFields = {};
    profileFields.user = req.user.id;
    profileFields.image = req.file.path;
		if (country) profileFields.country = country;
		if (city) profileFields.city = city;
		if (postalcode) profileFields.postalcode = postalcode;
		if (phone) profileFields.phone = phone;
		if (bio) profileFields.bio = bio;

		// Build social object
		profileFields.social = {};
		if (twitter) profileFields.social.twitter = twitter;
		if (facebook) profileFields.social.facebook = facebook;
		if (linkedin) profileFields.social.linkedin = linkedin;
		if (instagram) profileFields.social.instagram = instagram;

		try {
			// Using upsert option (creates new doc if no match is found):
			let profile = await Profile.findOneAndUpdate(
				{ user: req.user.id },
				{ $set: profileFields },
				{ new: true, upsert: true }
			);
			res.json(profile);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, async (req, res) => {
	try {
		const profile = await Profile.find({ user: req.user.id }).populate('user', '-password');

		if (!profile) {
			return res.status(400).json({ msg: 'There is no profile for this user' });
		}

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
	try {
		const profiles = await Profile.find().populate('user', '-password');
		res.json(profiles);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @route    GET api/profile/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/:user_id', async (req, res) => {
	try {
		const profile = await Profile.findOne({
			user: req.params.user_id
		}).populate('user', '-password');

		if (!profile) return res.status(400).json({ msg: 'Profile not found' });

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		if (err.kind == 'ObjectId') {
			return res.status(400).json({ msg: 'Profile not found' });
		}
		res.status(500).send('Server Error');
	}
});

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, async (req, res) => {
	try {
		// Remove user posts
		await Post.deleteMany({ user: req.user.id });
		// Remove profile
		await Profile.findOneAndRemove({ user: req.user.id });
		// Remove user
		await User.findOneAndRemove({ _id: req.user.id });

		res.json({ msg: 'User deleted' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
