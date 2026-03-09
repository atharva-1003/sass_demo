
import './App.css';

function App() {
  return (
    <div className="library-app">
      <header className="library-header">
        <nav className="library-nav">
          <div className="library-logo">LibraryX</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#books">Books</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <section className="library-hero" id="home">
          <h1>Welcome to LibraryX</h1>
          <p>Your gateway to knowledge, inspiration, and discovery.</p>
          <a href="#books" className="hero-btn">Explore Books</a>
        </section>
      </header>
      <main>
        <section className="book-showcase" id="books">
          <h2>Featured Books</h2>
          <div className="book-list">
            <div className="book-card">
              <img src="https://covers.openlibrary.org/b/id/10523338-L.jpg" alt="Book 1" />
              <h3>The Great Gatsby</h3>
              <p>F. Scott Fitzgerald</p>
            </div>
            <div className="book-card">
              <img src="https://covers.openlibrary.org/b/id/11153227-L.jpg" alt="Book 2" />
              <h3>To Kill a Mockingbird</h3>
              <p>Harper Lee</p>
            </div>
            <div className="book-card">
              <img src="https://covers.openlibrary.org/b/id/10958372-L.jpg" alt="Book 3" />
              <h3>1984</h3>
              <p>George Orwell</p>
            </div>
          </div>
        </section>
        <section className="about-section" id="about">
          <h2>About Us</h2>
          <p>LibraryX is dedicated to fostering a love for reading and lifelong learning. We offer a curated collection of books and resources for all ages.</p>
        </section>
        <section className="contact-section" id="contact">
          <h2>Contact</h2>
          <p>Email: info@libraryx.com</p>
        </section>
      </main>
      <footer className="library-footer">
        <p>&copy; {new Date().getFullYear()} LibraryX. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
