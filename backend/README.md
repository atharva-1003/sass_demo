# Library Management System - Backend API

## SCRUM-14 Implementation

This backend API provides endpoints for managing books using MongoDB as the database.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- MongoDB Compass (optional, for GUI database management)

## Setup Instructions

### 1. Install MongoDB Locally

Download and install MongoDB Community Server from: https://www.mongodb.com/try/download/community

### 2. Install Dependencies

```bash
cd backend
npm install
```

### 3. Configure Environment Variables

The `.env` file is already configured with:
```
MONGODB_URI=mongodb://localhost:27017/mcpdemo
PORT=5000
```

If using MongoDB Atlas or a different connection string, update the `MONGODB_URI` accordingly.

### 4. Start MongoDB

Make sure MongoDB is running on your local machine:

**Windows:**
```bash
mongod
```

**Mac/Linux:**
```bash
sudo service mongod start
```

### 5. Start the Backend Server

```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Get All Books
- **GET** `/api/books`
- Returns all books in the collection

### Get Single Book
- **GET** `/api/books/:id`
- Returns a specific book by ID

### Add New Book
- **POST** `/api/books`
- Body:
```json
{
  "title": "Book Title",
  "author": "Author Name",
  "isbn": "978-1234567890",
  "publishedYear": 2024,
  "genre": "Fiction",
  "description": "Book description"
}
```

### Update Book
- **PUT** `/api/books/:id`
- Body: Same as POST

### Delete Book
- **DELETE** `/api/books/:id`

### Health Check
- **GET** `/api/health`
- Returns server status

## Database

- Database Name: `mcpdemo`
- Collection: `books`

You can view and manage the database using MongoDB Compass by connecting to:
```
mongodb://localhost:27017/mcpdemo
```

## Frontend Integration

The frontend automatically fetches books when the `/books` page loads and displays them in a grid layout. Users can:
- View all books
- Add new books via a form
- See book details including title, author, genre, year, and description

## Testing

You can test the API using:
1. **Frontend Interface** - Navigate to `/books` in the React app
2. **Postman** or **Thunder Client** - Use the endpoints listed above
3. **MongoDB Compass** - View data directly in the database

## Troubleshooting

If you see "Error connecting to server":
1. Make sure MongoDB is running
2. Check that the backend server is started (`npm start`)
3. Verify the connection string in `.env`
4. Check that port 5000 is not in use

If CORS errors occur:
- The backend is configured to accept requests from all origins
- Ensure both frontend and backend are running
