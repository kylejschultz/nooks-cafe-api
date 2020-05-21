console.log('======== Starting Nook API ========');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const ejs = require('ejs');
const _ = require('lodash');
const dotenv = require('dotenv');

require('express-async-errors');
dotenv.config();

// Set-up Express
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());
app.use(methodOverride());
app.use(cookieParser());

// Build API Routes
require('./server/routes')(app);

// Connect to Mongoose and let me know what's happening.
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URI}?retryWrites=true&w=majority`,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
);

mongoose.connection.on('connected', function () {
  console.log(
    `Database connection open to ${mongoose.connection.host} ${mongoose.connection.name}`,
  );
  // Un-comment to enable Mongoose Debugging for RegEx checks
  mongoose.set('debug', true);
  console.log('Mongoose debugging is on. ');
});
mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

app.get('/', function (req, res) {
  res.send(`<div>
  <h1>Sorry, but there's nothing here...</h1>
  <p>Visit the project on <a href="https://github.com/gurthyy/nook-api">GitHub</a> for more info.</p>
  <div>`);
});

// Open the API for listening
app.listen(process.env.PORT, () => {
  console.log('NookAPI successfully started on port ' + process.env.PORT);
});
