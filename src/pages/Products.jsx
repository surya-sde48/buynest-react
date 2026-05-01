import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

function Products({ products, onAddToCart }) {
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('all');
  
  const cats = ['all', ...new Set(products.map(p => p.category))];
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) &&
    (cat === 'all' || p.category === cat)
  );
  
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div><h2>All Products</h2><p>Browse products, check ratings &amp; stock.</p></div>
        </div>
        <div className="filters">
          <input className="input" placeholder="Search products..." value={search} onChange={e => setSearch(e.target.value)} />
          <select className="select" value={cat} onChange={e => setCat(e.target.value)}>
            {cats.map(c => <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>)}
          </select>
        </div>
        {filtered.length === 0
          ? <div className="empty-state">No products found. Try a different filter.</div>
          : <div className="grid">{filtered.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />)}</div>
        }
      </div>
    </section>
  );
}

export default Products;