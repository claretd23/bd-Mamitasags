import React, { useEffect, useState } from 'react';
import { getEvents } from '../services/eventService';

const EventListComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Eventos</h1>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h2>{event.nombre}</h2>
            <p>{event.fecha}</p>
            <p>{event.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventListComponent;