const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    googleId: { type: String, required: true },
    title: { type: String, required: true },
    authors: { type: Array, required: true },
    description: String,
    link: String,
    image: String,
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
