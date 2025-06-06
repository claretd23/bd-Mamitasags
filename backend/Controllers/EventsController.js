import { Event } from '../Models/EventModels.js';

//obtener los eventos
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//crear un nuevo evento
export const createEvent = async (req, res) => {
  const { nombre, fecha, descripcion } = req.body;
  const nuevoEvento = new Event({ nombre, fecha, descripcion });

  try {
    const eventoGuardado = await nuevoEvento.save();
    res.status(201).json(eventoGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};