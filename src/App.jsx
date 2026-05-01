import React, { useState, useEffect } from 'react';


// Component Imports
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';

// Page Imports
import Home from './pages/Home';
import Products from './pages/Products';
import Admin from './pages/Admin';

function App() {
  const [page, setPage] = useState('home');
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(r => r.json())
      .then(data => setProducts(data.map((p, i) => ({ ...p, stock: (i % 5) + 2 }))))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  const addToCart = id => {
    setProducts(prev => prev.map(p => p.id === id && p.stock > 0 ? { ...p, stock: p.stock - 1 } : p));
    setCartItems(prev => {
      const ex = prev.find(i => i.id === id);
      return ex ? prev.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i) : [...prev, { id, quantity: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    const cur = cartItems.find(i => i.id === id); 
    if (!cur) return;
    
    const diff = qty - cur.quantity;
    const prod = products.find(p => p.id === id);
    
    if (qty <= 0) { 
      setCartItems(prev => prev.filter(i => i.id !== id)); 
      setProducts(prev => prev.map(p => p.id === id ? { ...p, stock: p.stock + cur.quantity } : p)); 
      return; 
    }
    
    if (diff > 0 && prod.stock < diff) return;
    
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
    setProducts(prev => prev.map(p => p.id === id ? { ...p, stock: p.stock - diff } : p));
  };

  const updateStock = (id, stock) => setProducts(prev => prev.map(p => p.id === id ? { ...p, stock: Math.max(0, stock) } : p));
  
  const addProduct = f => setProducts(prev => [{ 
    id: Date.now(), title: f.title, price: Number(f.price), category: f.category, stock: Number(f.stock), 
    image: 'https://placehold.co/300x300/fff3e6/f97316?text=Product', rating: { rate: 4.5 } 
  }, ...prev]);
  
  const deleteProduct = id => { 
    setProducts(prev => prev.filter(p => p.id !== id)); 
    setCartItems(prev => prev.filter(i => i.id !== id)); 
  };

  const placeOrder = details => { 
    setOrder(details); 
    setCartItems([]); 
    setPage('confirm'); 
    setCartOpen(false); 
  };

  const cartCount = cartItems.reduce((s, i) => s + i.quantity, 0);

  return (
    <>
      <Navbar page={page} setPage={setPage} cartCount={cartCount} openCart={() => setCartOpen(true)} />
      <main>
        {loading
          ? <section className="section"><div className="container"><div className="loading">⏳ Loading products from API...</div></div></section>
          : page === 'home' ? <Home featured={products.slice(0, 4)} setPage={setPage} onAddToCart={addToCart} />
          : page === 'products' ? <Products products={products} onAddToCart={addToCart} />
          : page === 'admin' ? <Admin products={products} updateStock={updateStock} addProduct={addProduct} deleteProduct={deleteProduct} />
          : page === 'checkout' ? <Checkout cartItems={cartItems} products={products} onPlaceOrder={placeOrder} onBack={() => setCartOpen(true)} />
          : page === 'confirm' && order ? <OrderConfirmation order={order} onContinue={() => setPage('products')} />
          : null
        }
      </main>
      
      {cartOpen && <Cart cartItems={cartItems} products={products} onClose={() => setCartOpen(false)} updateQty={updateQty} onCheckout={() => { setCartOpen(false); setPage('checkout'); }} />}
      
      <footer className="footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <span>© 2026 BuyNest</span>
          <span>Built by Surya Maran | React.js · JavaScript · REST APIs</span>
        </div>
      </footer>
    </>
  );
}

export default App;