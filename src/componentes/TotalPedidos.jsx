import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TotalPedidos = () => {
  const [totalPedidos, setTotalPedidos] = useState(0);

  useEffect(() => {
    fetchTotalPedidos();
  }, []);

  const fetchTotalPedidos = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/carts');
      const pedidos = response.data;
      setTotalPedidos(pedidos ? pedidos.length : 0);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Total de pedidos realizados</h2>
      <p>{totalPedidos}</p>
    </div>
  );
};

export default TotalPedidos;
