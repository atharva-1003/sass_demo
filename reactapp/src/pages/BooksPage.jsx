import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BooksPage.css';

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    publishedYear: '',
    genre: '',
    description: '',
  });

  const API_URL = 'http://localhost:5000/api/books';

  // Fetch books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const result = await response.json();
      
      if (result.success) {
        setBooks(result.data);
        setError(null);
      } else {
        setError('Failed to fetch books');
      }
    } catch (err) {
      setError('Error connecting to server. Make sure the backend is running.');
      console.error('Error fetching books:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (result.success) {
        setBooks(prev => [result.data, ...prev]);
        setFormData({
          title: '',
          author: '',
          isbn: '',
          publishedYear: '',
          genre: '',
          description: '',
        });
        setShowAddForm(false);
      } else {
        alert('Failed to add book: ' + result.message);
      }
    } catch (err) {
      alert('Error adding book. Make sure the backend is running.');
      console.error('Error adding book:', err);
    }
  };

  return (
    <div className="books-page">
      <header className="books-header">
        <h1>Library Portal</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/books" className="active">Books</Link>
          <Link to="/vr">VR</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <main className="books-main">
        <div className="books-container">
          <div className="books-title-section">
            <h2>Book Collection</h2>
            <button 
              className="add-book-btn"
              onClick={() => setShowAddForm(!showAddForm)}
            >
              {showAddForm ? 'Cancel' : '+ Add New Book'}
            </button>
          </div>

          {showAddForm && (
            <div className="add-book-form-container">
              <form onSubmit={handleSubmit} className="add-book-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="title">Title *</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="author">Author *</label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="isbn">ISBN</label>
                    <input
                      type="text"
                      id="isbn"
                      name="isbn"
                      value={formData.isbn}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="publishedYear">Published Year</label>
                    <input
                      type="number"
                      id="publishedYear"
                      name="publishedYear"
                      value={formData.publishedYear}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="genre">Genre</label>
                  <input
                    type="text"
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    placeholder="e.g., Fiction, Non-fiction, Science"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Enter book description"
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Add Book
                </button>
              </form>
            </div>
          )}

          {loading ? (
            <div className="loading">Loading books...</div>
          ) : error ? (
            <div className="error-message">
              <p>{error}</p>
              <button onClick={fetchBooks} className="retry-btn">Retry</button>
            </div>
          ) : books.length === 0 ? (
            <div className="no-books">
              <p>No books in the collection yet.</p>
              <p>Click "Add New Book" to get started!</p>
            </div>
          ) : (
            <div className="books-grid">
              {books.map((book) => (
                <div key={book._id} className="book-card">
                  <h3>{book.title}</h3>
                  <p className="book-author">by {book.author}</p>
                  {book.genre && <span className="book-genre">{book.genre}</span>}
                  {book.publishedYear && (
                    <p className="book-year">Published: {book.publishedYear}</p>
                  )}
                  {book.isbn && <p className="book-isbn">ISBN: {book.isbn}</p>}
                  {book.description && (
                    <p className="book-description">{book.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="books-footer">
        <p>&copy; 2026 Library Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}
