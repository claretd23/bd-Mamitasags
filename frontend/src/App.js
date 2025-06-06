import React, { useState } from 'react';
import TrabajadoresComponent from './components/TrabajadoresComponent';
import BebidasComponent from './components/BebidasComponent';
import EventFormComponent from './components/EventFormComponent';
import EventListComponent from './components/EventListComponent';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);

  const handleEventCreated = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="App">
      <spline-viewer url="https://prod.spline.design/A3Mack2VWSH3U9-F/scene.splinecode"></spline-viewer>
      <div className="container">
        <h1>Mamitas AGS Night Club</h1>
        <h2>Nuevo Trabajador/Trabajadora</h2>
        <TrabajadoresComponent />
        <h2>Nueva Bebida</h2>
        <BebidasComponent />
        <h2>Nuevo Evento</h2>
        <EventFormComponent onEventCreated={handleEventCreated} />
        <EventListComponent />
      </div>
    </div>
  );
}

export default App;