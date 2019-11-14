const express = require('express');
const router = express.Router();
const userModel = require('../model/userModel');

router.get('/test', (req, res) => {
    res.send({ msg: 'users test route.' });
});

//add new user
router.post("/", (req, res) => {
    const newUser = new userModel({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    userModel.findOne({ username: req.body.username }).then(files => {
        console.log(files);
        if (files) {
            res.send({ message: "This username already exists!" });

        } else {
            userModel.findOne({ email: req.body.email }).then(user => {
                console.log(user);
                if (user) {
                    res.send({ message: "This email already exists!" });

                } else {
                    newUser.save().then(user => {
                        res.send(user);
                    });
                }
            });
        }
    });


})


module.exports = router;