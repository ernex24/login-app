const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function(req, res, next) {
//Get token from header
	const token = req.header('x-auth-token');

// Check if no token
if (!token) {
	return res.status(401).json({ msg: 'NO token auth denied' });
}

// Verify token
const privateKey = process.env.JWT_SECRET;
try {
    // Decode token
    const decoded = jwt.verify(token, privateKey);req.user = decoded.user;
    // If token match gain access to the protected route
	next();
} catch (err) {
	res.status(401).json({ msg: 'Token is not valid' });
}

};
