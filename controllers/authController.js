const User = require('../models/User');
const { sendVerificationEmail } = require('../utils/email');
const jwt = require('../utils/jwt');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    // Hash password and create user
    const newUser = await User.create({ username, email, password });
    const token = jwt.generateToken(newUser._id);
    sendVerificationEmail(email, token);
    res.status(201).json({ message: 'User registered! Please verify your email.' });
};

// Verification endpoint
exports.verifyEmail = async (req, res) => {
    const { token } = req.params;
    // Verify token and update user
};

// Login endpoint
exports.login = async (req, res) => {
    const { email, password } = req.body;
    // Find user, compare password, and send JWT
};
