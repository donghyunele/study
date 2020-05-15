const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String,
  published_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('book', BookSchema)