import { Link } from 'react-router-dom';
import './VRPage.css';

export default function VRPage() {
  const vrFeatures = [
    {
      title: 'Immersive Book Previews',
      description: 'Step into interactive previews and explore chapters in a 3D reading environment before borrowing.',
    },
    {
      title: 'Virtual Reading Rooms',
      description: 'Join collaborative study rooms with voice chat, whiteboards, and curated collections by topic.',
    },
    {
      title: 'Guided Library Tours',
      description: 'Navigate the library virtually with smart wayfinding and discover shelves, events, and services.',
    },
  ];

  return (
    <div className="vr-page">
      <header className="vr-header">
        <h1>Library Portal</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/vr" className="active">VR</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <main className="vr-main">
        <section className="vr-hero">
          <h2>VR Library Experience</h2>
          <p>
            Explore the next generation of learning with virtual reality experiences designed
            for discovery, collaboration, and immersive storytelling.
          </p>
        </section>

        <section className="vr-features" aria-label="VR Features">
          {vrFeatures.map((feature) => (
            <article key={feature.title} className="vr-feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="vr-footer">
        <p>&copy; 2026 Library Portal. Experience the future of reading.</p>
      </footer>
    </div>
  );
}
