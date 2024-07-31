## Book Collection API
This is a simple Book Collection API built with Express.js, Node.js, and TypeScript. It provides CRUD operations for managing a collection of books, including the ability to upload and update book cover images.

# Features
Create a Book: Add a new book to the collection.
Update Book Cover Picture: Update the cover image of an existing book.
- Get All Books: Retrieve a list of all books in the collection.
- Get a Single Book: Retrieve details of a specific book by ID.
- Update a Book: Update the details of a book.
- Delete a Book: Remove a book from the collection.
# Technologies Used
- Node.js
- Express.js
- TypeScript
- MongoDB (via Mongoose)
- Multer (for file uploads)

1. Clone the repository:

   ```bash
   git clone <https://github.com/Ese-oghene/test>
   cd <test>
   ```
## API Endpoints
Create a Book
Endpoint: POST /books

Description: Create a new book.

## Request Body:

``` javascript
{
  "title": "King",
  "author": "Bernard",
  "publishedDate": "2024-07-31",
  "image": "uploads\\1722413910407-2.png",
  "ISBN": "123-4567891234"
}
```


## Response Body:

``` javascript

  {
    "title": "King",
    "author": "Bernard",
    "publishedDate": "2024-07-31",
    "image": "uploads\\1722413910407-2.png",
    "ISBN": "123-4567891234",
    "_id": "66a9f356c7f7de0c88183ff0",
    "__v": 0
}
```
---------------------------------------
## Get All Books
Endpoint: [GET /books](http://localhost:3000/api/books/)

Description: Retrieve a list of all books.

Response:
``` javascript

    {
        "_id": "66a8d37a79b4b0b5a4462365",
        "title": "Great",
        "author": "Bernard",
        "publishedDate": "2024-07-30",
        "image": "uploads\\1722340567163-8.png",
        "__v": 0
    },
    {
        "_id": "66a9f356c7f7de0c88183ff0",
        "title": "King",
        "author": "Bernard",
        "publishedDate": "2024-07-31",
        "image": "uploads\\1722413910407-2.png",
        "ISBN": "123-4567891234",
        "__v": 0
    }
```

------------------------------------------------------------------

## Get a Single Book
# Endpoint: GET /books/:id

# Description: Retrieve details of a specific book by ID.

Response:

``` javascript
  {
    "_id": "66a9f356c7f7de0c88183ff0",
    "title": "King",
    "author": "Bernard",
    "publishedDate": "2024-07-31",
    "image": "uploads\\1722413910407-2.png",
    "ISBN": "123-4567891234",
    "__v": 0
}
```
----------------------------------------------------------------
## Update a Book
Endpoint: [PUT /books/:id](http://localhost:3000/api/books/66a9f356c7f7de0c88183ff0)

Description: Update details of a book by ID.

Request Body:

```javascript
{
    "_id": "66a9f356c7f7de0c88183ff0",
    "title": "Ese",
    "author": "Bernard",
    "publishedDate": "2024-07-30",
    "image": "uploads\\1722416614504-6.png",
    "ISBN": "123-4567891234",
    "__v": 0
}
```


## Response:
```javascript
{
    "_id": "66a9f356c7f7de0c88183ff0",
    "title": "Food book",
    "author": "Bernard Ese",
    "publishedDate": "2024-08-01",
    "image": "uploads\\1722416735172-6.png",
    "ISBN": "123-4567891234",
    "__v": 0
}
```
-------------
## Update Book Cover Picture
URL: [PATCH /api/books/:id](http://localhost:3000/api/books/66aa052f95029b7c538718e7)
Parameters:
id: The ID of the book to update.
Request Body: form-data with the key coverImage and the image file as value.
Response:
```javascript
{
    "_id": "66aa052f95029b7c538718e7",
    "title": "King",
    "author": "Bernard",
    "publishedDate": "2024-07-31",
    "image": "uploads\\1722418702781-6.png",
    "ISBN": "123-4567891234",
    "__v": 0
}
```
Response:
```javascript
{
    "_id": "66aa052f95029b7c538718e7",
    "title": "King",
    "author": "Bernard",
    "publishedDate": "2024-07-31",
    "image": "uploads\\1722418896623-1.jpg",
    "ISBN": "123-4567891234",
    "__v": 0
}
```
-------------------------
## Delete a Book
Endpoint: [DELETE /books/:id](http://localhost:3000/api/books/66a9f356c7f7de0c88183ff0)

Description: Delete a book by ID.

Response:
```javascript
{
    "message": "Book deleted successfully"
}
```

-----------------------
# Running Tests
To run the test suite, use the following command:

```bash
    npm run test
 ```

## Contributing
- If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Be sure to include a detailed description of what you've added or changed.

License
This project is licensed under the MIT License - see the LICENSE file for details.