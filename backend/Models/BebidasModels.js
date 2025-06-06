import mongoose from 'mongoose';
const bebidaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
  });
  
  export const Bebida = mongoose.model('Bebida', bebidaSchema);