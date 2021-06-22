const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const emailRoutes = require('./routes/emailRoute').emailRoute;

const PORT = process.env.MODE === "production" ? 443 : 3000;

const app = express()
const dir = __dirname + '/client/build'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(dir));

emailRoutes(app);

app.get('/mode', (req, res) => {
    res.status(300).send({
        message: process.env.MODE
    })
})

app.get('*', (req, res) => {
    res.sendFile("index.html", {root: dir})
})

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})
