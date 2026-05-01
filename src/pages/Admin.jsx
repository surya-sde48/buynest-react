import React from 'react';
import AdminDashboard from '../components/AdminDashboard';

function Admin({ products, updateStock, addProduct, deleteProduct }) {
  return (
    <AdminDashboard 
      products={products} 
      updateStock={updateStock} 
      addProduct={addProduct} 
      deleteProduct={deleteProduct} 
    />
  );
}

export default Admin;