const express = require('express');
const cityRouter = require('./routes/cities-route');
const itineraryRouter = require('./routes/itinerary-route');
const activityRouter = require('./routes/activity-route');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/cities-route', cityRouter);
app.use('/itinerary-route', itineraryRouter);
app.use('/activity-route', activityRouter);

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));


