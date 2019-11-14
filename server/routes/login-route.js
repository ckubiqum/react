const express = require('express');
const router = express.Router();
// const userModel = require('../model/userModel');

router.get('/login', (req, res) => {
    res.send({ msg: 'users test route.' });
});



module.exports = router;