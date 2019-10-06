const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  option: String,
  votes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Options', optionSchema);
