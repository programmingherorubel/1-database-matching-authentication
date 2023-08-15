const mongoose = require('mongoose')
const express = require('express')
const UserSchema = require('../Schema/userSchema')
const User = mongoose.model('User', UserSchema)
const router = express.Router()

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const newUser = await User.create({ email, password });
        res.status(200).send("New User Created Successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
});
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({email:email})
            if(user && user.password === password){
                res.status(200).send("Valid Users");
            }else{
                res.send("Users Not Found");
            }
    } catch (error) {
        res.status(500).send(error.message);
    }
});


module.exports = router 