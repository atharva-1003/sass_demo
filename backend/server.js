import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mcpdemo';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB - Database: mcpdemo'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Book Schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: false,
  },
  publishedYear: {
    type: Number,
    required: false,
  },
  genre: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model('Book', bookSchema);

// Routes

// Get all books
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json({ success: true, data: books });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get single book by ID
app.get('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }
    res.json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Add a new book
app.post('/api/books', async (req, res) => {
  try {
    const { title, author, isbn, publishedYear, genre, description } = req.body;
    
    if (!title || !author) {
      return res.status(400).json({ 
        success: false, 
        message: 'Title and author are required' 
      });
    }

    const newBook = new Book({
      title,
      author,
      isbn,
      publishedYear,
      genre,
      description,
    });

    const savedBook = await newBook.save();
    res.status(201).json({ success: true, data: savedBook });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update a book
app.put('/api/books/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedBook) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }
    
    res.json({ success: true, data: updatedBook });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete a book
app.delete('/api/books/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    
    if (!deletedBook) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }
    
    res.json({ success: true, message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
