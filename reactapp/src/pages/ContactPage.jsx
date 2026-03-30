import { Link } from 'react-router-dom';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Library Portal</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/vr">VR</Link>
          <a href="#hours">Hours</a>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <main className="contact-main">
        <section className="contact-card" id="details">
          <h2>Contact Us</h2>
          <p>Need help finding a book or planning a visit? Our team is happy to help.</p>
          <ul>
            <li><strong>Email:</strong> hello@libraryportal.demo</li>
            <li><strong>Phone:</strong> +971 4 123 4567</li>
            <li><strong>Address:</strong> Demo Street 25, Downtown, Dubai</li>
          </ul>
        </section>

        <section className="contact-card" id="hours">
          <h3>Working Hours</h3>
          <p>Monday to Friday: 8:00 AM - 9:00 PM</p>
          <p>Saturday to Sunday: 9:00 AM - 7:00 PM</p>
        </section>
      </main>

      <footer className="contact-footer">
        <p>&copy; 2026 Library Portal</p>
      </footer>
    </div>
  );
}
