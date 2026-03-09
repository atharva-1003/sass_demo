import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
    // Add login logic here
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <h1>Library Portal</h1>
        <nav>
          <Link to="/">Home</Link>
          <a href="#catalog">Catalog</a>
          <a href="#about">About</a>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className="active">Login</Link>
        </nav>
      </header>

      <main className="login-main">
        <div className="login-container">
          <div className="login-card">
            <h2>Welcome Back</h2>
            <p className="login-subtitle">Sign in to your account</p>
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="forgot-password">Forgot password?</a>
              </div>

              <button type="submit" className="login-button">
                Sign In
              </button>
            </form>

            <div className="login-footer">
              <p>Don't have an account? <a href="#signup">Sign up</a></p>
            </div>
          </div>
        </div>
      </main>

      <footer className="page-footer">
        <p>&copy; 2026 Library Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}
