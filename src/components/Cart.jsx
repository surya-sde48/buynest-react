import React from 'react';

function Cart({ cartItems, products, onClose, updateQty, onCheckout }) {
  const items = cartItems.map(ci => ({ ...products.find(p => p.id === ci.id), quantity: ci.quantity })).filter(Boolean);
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  
  return (
    <div className="cart-overlay" onClick={onClose}>
      <aside className="cart-panel" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <div>
            <h2 style={{ fontSize: 'var(--text-lg)' }}>Your Cart</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>{items.length} item(s)</p>
          </div>
          <button className="btn btn-secondary" onClick={onClose}>✕ Close</button>
        </div>
        
        <div className="cart-items">
          {items.length === 0
            ? <div className="empty-state">Your cart is empty.</div>
            : items.map(item => (
              <div className="cart-item" key={item.id}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>{item.title.slice(0, 40)}</p>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>${item.price.toFixed(2)}</p>
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => updateQty(item.id, item.quantity - 1)}>−</button>
                    <span style={{ minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQty(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
              </div>
            ))
          }
        </div>
        
        <div className="row" style={{ fontWeight: 800, marginBottom: 'var(--space-4)' }}>
          <span>Total</span><span>${total.toFixed(2)}</span>
        </div>
        <button className="btn btn-primary" onClick={onCheckout} disabled={items.length === 0}>Proceed to Checkout</button>
      </aside>
    </div>
  );
}

export default Cart;