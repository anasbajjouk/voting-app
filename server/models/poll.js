const mongoose = require('mongoose');
const optionSchema = require('./options').schema;

// const optionSchema = new mongoose.Schema({
//   options: String,
//   votes: { type: Number, default: 0 },
// });

const pollSchema = new mongoose.Schema({
  question: String,
  user: { type: mongoose.Schema.Types.ObjectId },
  options: [optionSchema],
  voted: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Poll', pollSchema);
