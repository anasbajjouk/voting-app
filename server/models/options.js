const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  options: String,
  votes: { type: Number, default: 0 },
});


module.exports = mongoose.model('Options', optionSchema);
