const express = require('express');
const router = express.Router();
const cityModel = require('../model/cityModel');

router.get('/test', (req, res) => {
    res.send({ msg: 'Cities test route.' });
});
/*get all cities*/
router.get('/all',
    (req, res) => {
        cityModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });
router.post('/addCity', (req, res) => {
    const newCity = new cityModel({
        city: req.body.city,
        country: req.body.country
    })
    newCity.save()
        .then(city => {
            res.send(city)
        })
        .catch(err => {
            res.status(500).send("Server error")
        })
});
module.exports = router;