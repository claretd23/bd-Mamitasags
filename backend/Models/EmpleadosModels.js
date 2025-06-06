import mongoose from "mongoose";

// Esquema de Trabajador
const trabajadorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  genero: { type: String, enum: ['F', 'M'], required: true },
  edad: { type: Number, required: true },
});

export const Trabajador = mongoose.model('Trabajador', trabajadorSchema);
