'use strict';

require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const {v4: uuidv4} = require('uuid');
const router = require('./router');

const PORT = process.env.PORT || 3200;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(require('./router/index'));
app.set("view engine", "ejs");

// Load static assets
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}));

app.use('/router', router);

const database = require('./database/mongoConfig');
database();

// Home rounte
// app.get('/', (req, res) => {
//     res.render('index', {titl: 'Login System'});
// });

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});