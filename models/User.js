const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, minlength: 3, maxlength: 50 },
        email: { type: String, required: true, minlength: 7, maxlength: 100, unique: true },
        password: { type: String, required: true, minlength: 8, maxlength: 200 },
        admin: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now }
    })

const User = mongoose.models.UserData || mongoose.model('UserData', UserSchema);

module.exports = User;