const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.DATABASE,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  function(err, db) {
    if (err) throw err;
  },
);

module.exports.User = require('./user');
module.exports.Poll = require('./poll');
