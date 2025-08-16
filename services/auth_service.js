const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};
exports.comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};
exports.generateToken = (user) => {
    return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};