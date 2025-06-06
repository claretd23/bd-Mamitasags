import React, { useEffect, useState } from 'react';
import { getBebidas, createBebida } from '../services/bebidaService';
import axios from 'axios';

const BebidasComponent = () => {
  const [bebidas, setBebidas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  useEffect(() => {
    const fetchBebidas = async () => {
      const data = await getBebidas();
      setBebidas(data);
    };
    fetchBebidas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevaBebida = { nombre, precio: parseFloat(precio) }; 
    console.log('Datos enviados:', nuevaBebida); // Registro de los datos enviados
    try {
      const bebidaCreada = await createBebida(nuevaBebida);
      setBebidas([...bebidas, bebidaCreada]);
    } catch (error) {
      console.error('Error al crear bebida:', error);
    }
  };
  

  return (
    <div>
      <h1>Bebidas</h1>
      <ul>
        {bebidas.map((bebida) => (
          <li key={bebida._id}>{bebida.nombre} - ${bebida.precio}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre Bebida"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default BebidasComponent;