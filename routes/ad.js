const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const Ad = require('../model/ad.js');
const Profile = require('../model/profile.js');
const User = require('../model/user.js');

// @route    POST api/ad
// @desc     Create an ad
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('category', 'Category is required').not().isEmpty(),
      check('title', 'Title is required').not().isEmpty(),
      check('price', 'Price is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('currency', 'Currency is required').not().isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select('-password');

      const newAd = new Ad({
        category: req.body.category,
        subcategory: req.body.subcategory,
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        title: req.body.title,
        price: req.body.price,
        currency: req.body.currency,
        description: req.body.description,
        user: req.user.id,
        image1: req.body.image1,
        image2: req.body.image2,
        image3: req.body.image3,
        image4: req.body.image4
      });

      const ad = await newAd.save();

      res.json(ad);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/ad/all/latest
// @desc     Get all ads date descendant
// @access   Public
router.get('/all/latest', async (req, res) => {
  try {
    const ads = await Ad.find()
    .populate('user', '-password')
    .sort({ date: -1 })
    res.json(ads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route    GET api/ad/all/me
// @desc     Get all my ads date descendant
// @access   Private
router.get('/all/me', auth, async (req, res) => {
  try {
    const ads = await Ad.find({ user: req.user.id })
    .populate('user', '-password')
    .sort({ date: -1 })
    res.json(ads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route    GET api/ad/all/older
// @desc     Get all ads date descendant
// @access   Public
router.get('/all/older', async (req, res) => {
  try {
    const ads = await Ad.find().populate('user', ['name', 'email']).populate('profile', ['phone']).sort({ date: 1 });
    res.json(ads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/ad/:category/latest
// @desc     Get all ads in a category date descendant
// @access   Public
router.get('/:category/latest', async (req, res) => {
  try {
    const ads = await Ad.find({ category: req.params.category }).populate('user', ['name', 'email']).populate('profile', ['phone']).sort({ date: -1 });
    res.json(ads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET /all/expensive
// @desc     Get all ads in sorted from biguest price descendant
// @access   Public
router.get('/all/expensive', async (req, res) => {
  try {
    const ads = await Ad.find().populate('user', ['name', 'email']).populate('profile', ['phone']).sort({ price: 'descending' });
    res.json(ads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/ad/:category/older
// @desc     Get all ads in a category date descendant
// @access   Public
router.get('/:category/older', async (req, res) => {
  try {
    const ads = await Ad.find({ category: req.params.category }).populate('user', ['name', 'email']).populate('profile', ['phone']).sort({ date: 1 });
    res.json(ads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/ad/:id
// @desc     Get ad by ID
// @access   Private
router.get('/:id', auth, async (req, res) => {
  try {
    const ad = await Post.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.json(ad);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});


// @route    DELETE api/ad/:id
// @desc     Delete a ad
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    // Check user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await ad.remove();

    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});


// @route    PUT api/ad/like/:id
// @desc     Like a ad
// @access   Private
router.put('/like/:id', auth, async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);

    // Check if the post has already been liked
    if (
      ad.likes.filter(like => like.user.toString() === req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: 'Post already liked' });
    }

    ad.likes.unshift({ user: req.user.id });

    await ad.save();

    res.json(ad.likes);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/ad/unlike/:id
// @desc     Like a ad
// @access   Private
router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const ad = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      ad.likes.filter(like => like.user.toString() === req.user.id).length ===
      0
    ) {
      return res.status(400).json({ msg: 'Post has not yet been liked' });
    }

    // Get remove index
    const removeIndex = ad.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);

    ad.likes.splice(removeIndex, 1);

    await ad.save();

    res.json(ad.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



module.exports = router;