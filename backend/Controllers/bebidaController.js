import { Bebida } from '../Models/BebidasModels.js';

// Obtener todas las bebidas
export const getBebidas = async (req, res) => {
  try {
    const bebidas = await Bebida.find();
    res.status(200).json(bebidas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva bebida
export const createBebida = async (req, res) => {
  const { nombre, precio } = req.body;
  const nuevaBebida = new Bebida({ nombre, precio });

  try {
    const bebidaGuardada = await nuevaBebida.save();
    res.status(201).json(bebidaGuardada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};