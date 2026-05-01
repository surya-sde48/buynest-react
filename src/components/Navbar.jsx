import React from 'react';

function Navbar({ page, setPage, cartCount, openCart }) {
  const links = [
    { key: 'home', label: 'Home' },
    { key: 'products', label: 'Products' },
    { key: 'admin', label: 'Admin' }
  ];
  
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <button className="brand" onClick={() => setPage('home')}>
          <span className="brand-mark">B</span>
          <span>BuyNest</span>
        </button>
        <nav className="nav-links">
          {links.map(l => (
            <button key={l.key} className={`nav-link${page === l.key ? ' active' : ''}`} onClick={() => setPage(l.key)}>{l.label}</button>
          ))}
          <button className="cart-button" onClick={openCart}>
            🛒 Cart <span className="cart-badge">{cartCount}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;