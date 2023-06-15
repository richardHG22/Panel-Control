import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductosMasVendidos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchProductosMasVendidos();
  }, []);

  const fetchProductosMasVendidos = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const productos = response.data;
      productos.sort((a, b) => b.popularity - a.popularity);
      const productosMasVendidos = productos.slice(0, 5);
      setProductos(productosMasVendidos);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Productos más vendidos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>{producto.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductosMasVendidos;
