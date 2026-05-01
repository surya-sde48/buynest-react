import React from 'react';

function ProductCard({ product, onAddToCart }) {
  const badgeClass = product.stock === 0 ? 'badge badge-out' : product.stock <= 3 ? 'badge badge-low' : 'badge badge-stock';
  const badgeLabel = product.stock === 0 ? 'Out of Stock' : product.stock <= 3 ? `Only ${product.stock} left` : `In Stock (${product.stock})`;
  
  return (
    <article className="card">
      <div className="product-image-wrap">
        <img className="product-image" src={product.image} alt={product.title} loading="lazy" />
      </div>
      <div className="card-body">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-meta">
          <span className="price">${product.price.toFixed(2)}</span>
          <span className={badgeClass}>{badgeLabel}</span>
        </div>
        <div className="product-actions">
          <span style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>⭐ {product.rating?.rate || 4.2}</span>
          <button className="btn btn-primary" onClick={() => onAddToCart(product.id)} disabled={product.stock === 0}>
            {product.stock === 0 ? 'Unavailable' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;