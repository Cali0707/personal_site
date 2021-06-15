const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const PORT = process.env.PORT || 3000;

const app = express()
const dir = __dirname + '/client/build'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(dir));

app.get('*', (req, res) => {
    res.sendFile("index", {root: dir})
})

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})
