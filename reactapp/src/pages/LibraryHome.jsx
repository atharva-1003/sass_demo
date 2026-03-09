import './LibraryHome.css';
import { Link } from 'react-router-dom';

export default function LibraryHome() {
  return (
    <div className="library-home">
      <header className="library-header">
        <h1>Library Portal</h1>
        <nav>
          <a href="#home">Home</a>
          <Link to="/books">Books</Link>
          <a href="#about">About</a>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <main className="library-main">
        <section className="hero-section">
          <h2>Welcome to the Library</h2>
          <p>Explore a world of knowledge and imagination. Discover books, resources, and more.</p>
        </section>
        <section className="features-section">
          <div className="feature-card">
            <h3>Vast Collection</h3>
            <p>Thousands of books and digital resources at your fingertips.</p>
          </div>
          <div className="feature-card">
            <h3>Modern Facilities</h3>
            <p>Comfortable reading spaces, study rooms, and free Wi-Fi.</p>
          </div>
          <div className="feature-card">
            <h3>Events & Workshops</h3>
            <p>Join our regular events, workshops, and community programs.</p>
          </div>
        </section>
      </main>
      <footer className="library-footer">
        <p>&copy; 2026 Library Portal. Inspired by <a href="https://www.mbrl.ae/" target="_blank" rel="noopener noreferrer">MBRL</a>.</p>
      </footer>
    </div>
  );
}
