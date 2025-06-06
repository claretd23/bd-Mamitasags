import React, { useEffect, useState } from 'react';
import { getTrabajadores, createTrabajador } from '../services/trabajadorService';
import axios from 'axios';

const TrabajadoresComponent = () => {
  const [trabajadores, setTrabajadores] = useState([]);
  const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');
  const [edad, setEdad] = useState('');
  const [editando, setEditando] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  useEffect(() => {
    const fetchTrabajadores = async () => {
      const data = await getTrabajadores();
      setTrabajadores(data);
    };
    fetchTrabajadores();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoTrabajador = { nombre, genero, edad: parseInt(edad) }; 
    console.log('Datos enviados:', nuevoTrabajador); // Registro de los datos enviados
    try {
      if (editando) {
        const trabajadorActualizado = await axios.put(`http://localhost:4000/api/trabajadores/${idEditando}`, nuevoTrabajador);
        setTrabajadores(trabajadores.map(trabajador => trabajador._id === idEditando ? trabajadorActualizado.data : trabajador));
        setEditando(false);
        setIdEditando(null);
      } else {
        const trabajadorCreado = await createTrabajador(nuevoTrabajador);
        setTrabajadores([...trabajadores, trabajadorCreado]);
      }
      setNombre('');
      setGenero('');
      setEdad('');
    } catch (error) {
      console.error('Error al crear o actualizar trabajador:', error);
    }
  };

  const handleDeleteWorker = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/trabajadores/${id}`);
      setTrabajadores(trabajadores.filter(trabajador => trabajador._id !== id));
    } catch (error) {
      console.error('Error al eliminar trabajador:', error);
    }
  };

  const handleEditWorker = (trabajador) => {
    setNombre(trabajador.nombre);
    setGenero(trabajador.genero);
    setEdad(trabajador.edad.toString());
    setEditando(true);
    setIdEditando(trabajador._id);
  };

  return (
    <div>
      <h1>Trabajadores</h1>
      <ul>
        {trabajadores.map((trabajador) => (
          <li key={trabajador._id}>
            {trabajador.nombre} - {trabajador.genero} - {trabajador.edad}
            <button onClick={() => handleDeleteWorker(trabajador._id)}>Eliminar</button>
            <button onClick={() => handleEditWorker(trabajador)}>Actualizar</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <select value={genero} onChange={(e) => setGenero(e.target.value)} required>
          <option value="">Selecciona Género</option>
          <option value="M">Hombre</option>
          <option value="F">Mujer</option>
        </select>
        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          required
        />
        <button type="submit">{editando ? 'Actualizar' : 'Agregar'}</button>
      </form>
    </div>
  );
};

export default TrabajadoresComponent;