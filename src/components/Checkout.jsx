import React, { useState } from 'react';

function Checkout({ cartItems, products, onPlaceOrder, onBack }) {
  const [form, setForm] = useState({ name: '', email: '', address: '', card: '', expiry: '', cvv: '' });
  const [errors, setErrors] = useState({});
  
  const items = cartItems.map(ci => ({ ...products.find(p => p.id === ci.id), quantity: ci.quantity })).filter(Boolean);
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  
  const change = e => setForm({ ...form, [e.target.name]: e.target.value });
  
  const validate = () => {
    const err = {};
    Object.entries(form).forEach(([k, v]) => { if (!v.trim()) err[k] = 'Required'; });
    if (form.card && form.card.replace(/\s/g, '').length < 12) err.card = 'Enter valid card number';
    if (form.cvv && form.cvv.length < 3) err.cvv = 'Enter valid CVV';
    setErrors(err);
    return Object.keys(err).length === 0;
  };
  
  const submit = e => { 
    e.preventDefault(); 
    if (!validate()) return; 
    onPlaceOrder({ customer: form, items, total, orderId: `BN-${Date.now().toString().slice(-6)}` }); 
  };
  
  const fields = [
    ['name', 'Full Name'], ['email', 'Email Address'], ['address', 'Shipping Address', true], 
    ['card', 'Card Number', true], ['expiry', 'Expiry (MM/YY)'], ['cvv', 'CVV']
  ];
  
  return (
    <section className="section">
      <div className="container checkout-layout">
        <form className="form-card" onSubmit={submit}>
          <div className="section-head" style={{ marginBottom: '1.5rem' }}>
            <div><h2>Secure Checkout</h2><p>Enter your shipping and payment details.</p></div>
          </div>
          <div className="form-grid">
            {fields.map(([name, label, full]) => (
              <div className={`form-field${full ? ' full' : ''}`} key={name}>
                <label htmlFor={name}>{label}</label>
                <input id={name} name={name} className="input" value={form[name]} onChange={change} placeholder={label} />
                {errors[name] && <span className="error-text">{errors[name]}</span>}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <button type="button" className="btn btn-secondary" onClick={onBack}>← Back</button>
            <button type="submit" className="btn btn-primary">Place Order</button>
          </div>
        </form>
        <aside className="summary-card">
          <h3 style={{ marginBottom: '1rem' }}>Order Summary</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '1rem' }}>
            {items.map(item => (
              <div className="row" key={item.id} style={{ fontSize: 'var(--text-sm)' }}>
                <span>{item.title.slice(0, 26)} ×{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="row" style={{ fontWeight: 800, borderTop: '1px solid var(--color-divider)', paddingTop: '.75rem' }}>
            <span>Total</span><span>${total.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Checkout;