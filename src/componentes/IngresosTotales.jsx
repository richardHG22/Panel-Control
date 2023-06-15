import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IngresosTotales = () => {
  const [ingresosTotales, setIngresosTotales] = useState(0);

  useEffect(() => {
    fetchIngresosTotales();
  }, []);

  const fetchIngresosTotales = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/carts');
      const pedidos = response.data;
      const ingresos = pedidos.reduce((total, pedido) => total + pedido.total, 0);
      setIngresosTotales(ingresos.toFixed(2));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Ingresos totales generados</h2>
      <p>{ingresosTotales}</p>
    </div>
  );
};

export default IngresosTotales;
