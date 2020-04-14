const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const books = require('../../Books');

// // Gets All Members
// router.get('/', (req, res) => res.json(books));

// // Get Single Member
// router.get('/isbn', (req, res) => {
//     const found = books.some(book => book.id === parseInt(req.params.id));

//     if (found) {
//         res.json(books.filter(book => book.id === parseInt(req.params.id)));
//     } else {
//         res.status(400).json({ msg: `No book with the isbn of ${req.params.id}` });
//     }
// });

// Create Member
router.post('/', (req, res) => {
    console.log(req.body)
    const newBook = {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author
    };

    if (!newBook.title || !newBook.author || !newBook.isbn) {
        return res.status(400).json({ msg: 'Please include a title and author' });
    }

    books.push(newBook);
    res.json(books);
    // res.redirect('/');
});


module.exports = router;
