import React from 'react';
import ProductCard from '../components/ProductCard';

function Home({ featured, setPage, onAddToCart }) {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>Shop smart with BuyNest's fast and reliable storefront.</h1>
            <p>Explore trending products, track inventory in real time, and complete purchases through a secure checkout flow.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => setPage('products')}>Shop Now →</button>
              <button className="btn btn-secondary" onClick={() => setPage('admin')}>Admin Panel</button>
            </div>
          </div>
          <div className="hero-panel">
            <h2 style={{ fontSize: 'var(--text-lg)', marginBottom: '.75rem' }}>Platform Highlights</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>Built with React.js, JavaScript &amp; REST APIs — featuring live cart updates and real-time inventory controls.</p>
            <div className="hero-stats">
              <div className="stat-card"><p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Products</p><h3>20+</h3></div>
              <div className="stat-card"><p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Responsive</p><h3>100%</h3></div>
              <div className="stat-card"><p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Secure UI</p><h3>✓</h3></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><h2>Featured Products</h2><p>Top picks from the catalog.</p></div>
            <button className="btn btn-secondary" onClick={() => setPage('products')}>View All</button>
          </div>
          <div className="grid">
            {featured.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />)}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;