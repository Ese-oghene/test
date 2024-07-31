import { Request, Response } from 'express';
import Book from '../models/book';
import path from 'path';
import fs from 'fs';

// Create a new book
export const createBook = async (req: Request, res: Response): Promise<void> => {
    try {
      const { title, author, publishedDate } = req.body;
      const image = req.file ? req.file.path : '';
      const newBook = new Book({ title, author, publishedDate, image });
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };

  // Get all books
export const getBooks = async (req: Request, res: Response): Promise<void> => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };

  // Get a single book by ID
export const getBookById = async (req: Request, res: Response): Promise<void> => {
    try {
      const book = await Book.findById(req.params.id);
      if (book) {
        res.status(200).json(book);
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };


  // Update a book by ID
export const updateBook = async (req: Request, res: Response): Promise<void> => {
    try {
      const { title, author, publishedDate } = req.body;
      const image = req.file ? req.file.path : '';
      const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        { title, author, publishedDate, image },
        { new: true }
      );
      if (updatedBook) {
        res.status(200).json(updatedBook);
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };


  export const updateBookCoverImage = async (req: Request, res: Response) => {
    const bookId = req.params.id;
  
    try {
      // Find the book by ID
      const book = await Book.findById(bookId);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      // Check if a file is uploaded
      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
  
      // Define the new cover image path
      const coverImagePath = path.join('uploads', req.file.filename);
  
      // Delete the old cover image if it exists
      if (book.image) {
        const oldImagePath = path.join(__dirname, '../../', book.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
  
      // Update the book's image path
      book.image = coverImagePath;
      await book.save();
  
      // Respond with the updated book
      res.json(book);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };




  // Delete a book by ID
export const deleteBook = async (req: Request, res: Response): Promise<void> => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (deletedBook) {
        res.status(200).json({ message: 'Book deleted successfully' });
      } else {
        res.status(404).json({ message: 'Book not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };