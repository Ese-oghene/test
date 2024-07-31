// describe('Sample Test', () => {
//     it('should return true', () => {
//       expect(true).toBe(true);
//     });
//   });

import request from 'supertest';
import mongoose from 'mongoose';
//import app from '../src/app';
import app from '../src/app'; // Adjust the path as necessary
import Book from '../src/models/book';

describe('Book Collection API', () => {
  beforeAll(async () => {
    // Connect to the in-memory database before all tests
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/test-db', {
     // useNewUrlParser: true,
     // useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    // Disconnect and clean up after all tests
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  afterEach(async () => {
    // Clean up after each test
    await Book.deleteMany({});
  });

  it('should create a new book', async () => {
    const newBook = {
      title: 'Test Book',
      author: 'Test Author',
      publishedDate: '2024-01-01',
    };

    const response = await request(app)
      .post('/api/books')
      .send(newBook)
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body.title).toBe(newBook.title);
    expect(response.body.author).toBe(newBook.author);
    expect(response.body.publishedDate).toBe(newBook.publishedDate);
  });

  it('should get all books', async () => {
    await Book.create({ title: 'Book1', author: 'Author1', publishedDate: '2024-01-01' });
    await Book.create({ title: 'Book2', author: 'Author2', publishedDate: '2024-01-02' });

    const response = await request(app)
      .get('/api/books')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toHaveLength(2);
  });

  it('should update a book', async () => {
    const book = await Book.create({ title: 'Original Title', author: 'Author', publishedDate: '2024-01-01' });
    const updatedBook = {
      title: 'Updated Title',
      author: 'Updated Author',
      publishedDate: '2024-02-01',
    };

    const response = await request(app)
      .put(`/api/books/${book._id}`)
      .send(updatedBook)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.title).toBe(updatedBook.title);
    expect(response.body.author).toBe(updatedBook.author);
  });

  it('should delete a book', async () => {
    const book = await Book.create({ title: 'Delete Me', author: 'Author', publishedDate: '2024-01-01' });

    await request(app)
      .delete(`/api/books/${book._id}`)
      .expect(204);

    const foundBook = await Book.findById(book._id);
    expect(foundBook).toBeNull();
  });

  it('should handle a missing book ID', async () => {
    const response = await request(app)
      .get('/api/books/invalid_id')
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body.message).toBe('Invalid book ID');
  });
});

  