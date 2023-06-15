import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TotalProductos from './TotalProductos';
import TotalPedidos from './TotalPedidos';
import IngresosTotales from './IngresosTotales';
import PrecioPromedio from './PrecioPromedio';
import ProductosMasVendidos from './ProductosMasVendidos';
import './estilos/PanelControl.css';

const PanelControl = () => {
  const [totalProductos, setTotalProductos] = useState(0);
  const [totalPedidos, setTotalPedidos] = useState(0);
  const [ingresosTotales, setIngresosTotales] = useState(0);
  const [precioPromedio, setPrecioPromedio] = useState(0);
  const [productosMasVendidos, setProductosMasVendidos] = useState([]);

  useEffect(() => {
    fetchTotalProductos();
    fetchTotalPedidos();
    fetchIngresosTotales();
    fetchPrecioPromedio();
    fetchProductosMasVendidos();
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

  const fetchTotalPedidos = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/carts');
      const pedidos = response.data;
      setTotalPedidos(pedidos.length);
    } catch (error) {
      console.error('Error:', error);
    }
  };

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

  const fetchProductosMasVendidos = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const productos = response.data;
      productos.sort((a, b) => b.popularity - a.popularity);
      const productosMasVendidos = productos.slice(0, 5);
      setProductosMasVendidos(productosMasVendidos);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="panel-control">
      <h1>Panel de Control</h1>
      <div className="metrics-container">
        <TotalProductos total={totalProductos} />
        <TotalPedidos total={totalPedidos} />
        <IngresosTotales total={ingresosTotales} />
        <PrecioPromedio precio={precioPromedio} />
        <ProductosMasVendidos productos={productosMasVendidos} />
      </div>
    </div>
  );
};

export default PanelControl;
