import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TotalProductos = () => {
  const [totalProductos, setTotalProductos] = useState(0);

  useEffect(() => {
    fetchTotalProductos();
  }, []);

  const fetchTotalProductos = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const productos = response.data;
      setTotalProductos(productos.length);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Total de productos</h2>
      <p>{totalProductos}</p>
    </div>
  );
};

export default TotalProductos;
