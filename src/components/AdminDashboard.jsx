import React, { useState } from 'react';

function AdminDashboard({ products, updateStock, addProduct, deleteProduct }) {
  const [form, setForm] = useState({ title: '', price: '', category: 'general', stock: '' });
  
  const totalStock = products.reduce((s, p) => s + p.stock, 0);
  const lowStock = products.filter(p => p.stock <= 3).length;
  
  const submit = e => {
    e.preventDefault();
    if (!form.title || !form.price || !form.stock) return;
    addProduct(form);
    setForm({ title: '', price: '', category: 'general', stock: '' });
  };
  
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div><h2>Admin Dashboard</h2><p>Manage products and monitor inventory.</p></div>
        </div>
        
        <div className="kpi-row">
          <div className="kpi">
            <p style={{ color: 'var(--color-text-muted)' }}>Total Products</p>
            <h3 style={{ fontSize: 'var(--text-lg)' }}>{products.length}</h3>
          </div>
          <div className="kpi">
            <p style={{ color: 'var(--color-text-muted)' }}>Total Stock</p>
            <h3 style={{ fontSize: 'var(--text-lg)' }}>{totalStock}</h3>
          </div>
          <div className="kpi">
            <p style={{ color: 'var(--color-text-muted)' }}>Low Stock</p>
            <h3 style={{ fontSize: 'var(--text-lg)', color: lowStock > 0 ? 'var(--color-primary-active)' : 'inherit' }}>{lowStock}</h3>
          </div>
        </div>
        
        <div className="admin-layout">
          <form className="admin-card" onSubmit={submit}>
            <h3 style={{ marginBottom: '1rem' }}>Add New Product</h3>
            {[['title', 'Product Name', 'text'], ['price', 'Price', 'number'], ['stock', 'Stock', 'number']].map(([key, label, type]) => (
              <div className="form-field" style={{ marginBottom: '.9rem' }} key={key}>
                <label>{label}</label>
                <input className="input" type={type} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} />
              </div>
            ))}
            <div className="form-field" style={{ marginBottom: '1rem' }}>
              <label>Category</label>
              <select className="select" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                <option value="general">General</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">+ Add Product</button>
          </form>
          
          <div className="admin-card">
            <h3 style={{ marginBottom: '1rem' }}>Inventory Table</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Action</th></tr>
                </thead>
                <tbody>
                  {products.map(p => (
                    <tr key={p.id}>
                      <td>{p.title.slice(0, 26)}</td>
                      <td>{p.category}</td>
                      <td>${p.price.toFixed(2)}</td>
                      <td>
                        <input className="input" type="number" value={p.stock}
                          onChange={e => updateStock(p.id, Number(e.target.value))}
                          style={{ width: '80px', minHeight: '36px', padding: '.4rem .6rem' }} />
                      </td>
                      <td>
                        <button className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '.4rem .75rem' }} onClick={() => deleteProduct(p.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;