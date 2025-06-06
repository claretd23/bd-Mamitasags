import React, { useState } from 'react';
import { createEvent } from '../services/eventService';

const EventFormComponent = ({ onEventCreated }) => {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoEvento = { nombre, fecha, descripcion };
    console.log('Datos enviados:', nuevoEvento); // Registro de los datos enviados
    try {
      const eventoCreado = await createEvent(nuevoEvento);
      onEventCreated(eventoCreado);
      setNombre('');
      setFecha('');
      setDescripcion('');
    } catch (error) {
      console.error('Error al crear evento:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del Evento"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Fecha del Evento"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción del Evento"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      />
      <button type="submit">Agregar Evento</button>
    </form>
  );
};

export default EventFormComponent;