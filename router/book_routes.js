const express = require('express');
const router = express.Router();
const book_controller = require('../controllers/book_controller'); 


router.get('/', book_controller.getAllBooks);

router.post('/',book_controller.addBook);

router.get('/:id',book_controller.getBookId);

router.put('/:id',book_controller.updBooks);

router.delete('/:id',book_controller.deleteBookById);

module.exports = router;