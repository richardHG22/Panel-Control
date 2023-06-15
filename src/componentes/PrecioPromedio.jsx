import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PrecioPromedio = () => {
  const [precioPromedio, setPrecioPromedio] = useState(0);

  useEffect(() => {
    fetchPrecioPromedio();
  }, []);

  const fetchPrecioPromedio = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const productos = response.data;
      const precios = productos.map((producto) => producto.price);
      const totalPrecios = precios.reduce((total, precio) => total + precio, 0);
      const promedio = totalPrecios / productos.length;
      setPrecioPromedio(promedio.toFixed(2));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Precio promedio de los productos</h2>
      <p>${precioPromedio}</p>
    </div>
  );
};

export default PrecioPromedio;
