import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fecha: { type: Date, required: true },
  descripcion: { type: String, required: true },
});

export const Event = mongoose.model('Event', eventSchema);