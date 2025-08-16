const {user} = require('../models'); 
const bcrypt = require('bcrypt');
const e = require('express');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const hash=await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hash, role: role || 'user' });
        res.status(201).json({ message: 'User registered successfully', user: { id: user.id, username: user.username, role: user.role } });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const match= await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const token = jwt.sign({ id: user.id, user:user.username ,role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({token});
    } catch (error) {
        res.status(500).json({ message: 'Error logging in',error: error.message });
    }
};