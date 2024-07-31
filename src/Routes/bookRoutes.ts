import { Router } from 'express';
import { createBook, getBooks, getBookById, updateBook, deleteBook } from '../Controller/bookController';
import upload from '../middleware/upload';
const router = Router();

router.post('/books', upload.single('image'), createBook);
router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.put('/books/:id', upload.single('image'), updateBook);
router.delete('/books/:id', deleteBook);

export default router;
