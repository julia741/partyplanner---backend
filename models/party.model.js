const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const partySchema = new Schema({
  title: { type: String, required: true },
  place: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  author: {type: String, required: true}
}, {
  timestamps: true,
});

const Party = mongoose.model('Party', partySchema);

module.exports = Party;