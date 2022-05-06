const express = require('express');
const router = express();

const bookController = require('../controllers/book.controller')
const companyController = require('../controllers/company.controller')

module.exports = () => {
    router.get('/books', bookController.getBooks);
    router.get('/books/:id', bookController.getBookById);
    router.post('/books', bookController.createBook);
    router.put('/books/:id', bookController.updateBookById);
    router.delete('/books/:id', bookController.deleteBookById);

    router.get('/providers', companyController.getCompanies);

    return router;
}