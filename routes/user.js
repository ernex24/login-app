const express = require('express');
const User = require('../model/user.js');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = require('../middleware/auth.js')

const router = express.Router();

// @route    GET /auth
// @desc     Test protected route with JWT autentication 
// @access   Private
router.get('/auth', auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


// @route    GET /register
// @desc     Register
// @access   Public
router.post(
	'/register',
	[
		//Validate inputs
		check('name', 'name is required').not().isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
	],
	async (req, res) => {
		//Return validation message
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;

		//Check if the user exist
		try {
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({ errors: [ { msg: 'User already exist' } ] });
			}

			//Send tho the Mongoose Schema
			user = new User({
				name,
				email,
				password
			});

			//Hash Password
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);

			//Save New user to mongo db
			await user.save();

			const payload = {
				user: {
					id: user.id
				}
			};

			//Return token after register
			const privateKey = process.env.JWT_SECRET;
			jwt.sign(payload, privateKey, { expiresIn: 360000 }, (err, token) => {
				if (err) throw err;
				res.json({ token });
			});
		} catch (err) {
			console.error(err.message);
			res.status(500).send('server error');
		}
	}
);

// @route    GET /login
// @desc     Login
// @access   Public
router.post(
	'/login',
	[
		//Validate inputs
		check('email', 'Please include a valid email').isEmail(),
		check('password', 'Password is required').exists()
	],
	async (req, res) => {
		//Return validation message
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;

		//Check if the user exist
		try {
			let user = await User.findOne({ email });
			if (!user) {
				return res.status(400).json({ errors: [{ msg:'Invalid credentials'}]});
            }
            
            const isMatch = await bcrypt.compare(password, user.password)

            if(!isMatch) {
                return res
                .status(400)
                .json({errors: [{msg: "Invalid password"}]})
            }

			const payload = {
				user: {
					id: user.id
				}
			};

			//Return token after register
			const privateKey = process.env.JWT_SECRET;
			jwt.sign(
                payload, 
                privateKey, 
                { expiresIn: 360000 }, 
                (err, token) => {
				if (err) throw err;
				res.json({ token });
            });
            
		} catch (err) {
			console.error(err.message);
			res.status(500).send('server error');
		}
	}
);

module.exports = router;
