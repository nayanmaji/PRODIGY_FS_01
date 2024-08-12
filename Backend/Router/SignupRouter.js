const UserModel = require('../Model/UserModel');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PrivateKey=process.env.PrivateKey;

router.post('/signup', async (req, res) => {
    try {
        const { name, phone, password, cpassword } = req.body;
        const ExistUser = await UserModel.findOne({ phone })
        if (ExistUser) {
            res.status(400).json({ message: 'Phone Number Already Exist.' });
            return;
        }
        if (password !== cpassword) {
            res.status(400).json({ message: 'Confirm Password do not match.' });
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const hashedCPassword = await bcrypt.hash(cpassword, salt);
        const newUser = new UserModel({ name, phone, password: hashedPassword, cpassword: hashedCPassword })
        await newUser.save();
        const token = jwt.sign( {id:newUser._id},PrivateKey,{ expiresIn: 60 * 5 } );
        res.status(200).json({ token });
        return;
    }
    catch (error) {
        res.status(500).json({ message: error.message });
        return;
    }
})

module.exports = router;