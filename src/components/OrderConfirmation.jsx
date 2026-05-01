import React from 'react';

function OrderConfirmation({ order, onContinue }) {
  return (
    <section className="section">
      <div className="container">
        <div className="order-box">
          <div className="success-mark">✓</div>
          <h2 style={{ fontSize: 'var(--text-lg)', marginBottom: '.75rem' }}>Order Placed Successfully!</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Thank you for shopping with BuyNest.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1.5rem', textAlign: 'left', background: 'var(--color-surface-2)', padding: '1rem', borderRadius: 'var(--radius-lg)' }}>
            <p><strong>Order ID:</strong> {order.orderId}</p>
            <p><strong>Total Paid:</strong> ${order.total.toFixed(2)}</p>
            <p><strong>Items Ordered:</strong> {order.items.reduce((s, i) => s + i.quantity, 0)}</p>
            <p><strong>Delivered to:</strong> {order.customer.address}</p>
          </div>
          <button className="btn btn-primary" onClick={onContinue}>Continue Shopping</button>
        </div>
      </div>
    </section>
  );
}

export default OrderConfirmation;