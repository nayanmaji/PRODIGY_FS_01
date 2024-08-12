const UserModel = require('../Model/UserModel');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PrivateKey=process.env.PrivateKey;

router.post('/login', async (req, res) => {
    try {
        const { phone, password } = req.body;
        const User = await UserModel.findOne({ phone });
        if (!User) {
            res.status(400).json({ message: 'Phone Number Not Exist.' });
            return 
        }
        const hashedPassword = await bcrypt.compare(password, User.password);
        if (!hashedPassword) {
            res.status(400).json({ message: 'password not match' });
            return
        }
        const token = jwt.sign( {id:User._id},PrivateKey,{ expiresIn: 60 * 5 } );
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
        return
    }
})

module.exports = router;