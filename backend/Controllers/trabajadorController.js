import { Trabajador } from '../Models/EmpleadosModels.js';

// Obtener todos los trabajadores
export const getTrabajadores = async (req, res) => {
  try {
    const trabajadores = await Trabajador.find();
    res.status(200).json(trabajadores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo trabajador
export const createTrabajador = async (req, res) => {
  const { nombre, genero, edad } = req.body;
  const nuevoTrabajador = new Trabajador({ nombre, genero, edad });

  try {
    const trabajadorGuardado = await nuevoTrabajador.save();
    res.status(201).json(trabajadorGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un trabajador
export const deleteTrabajador = async (req, res) => {
  const { id } = req.params;
  try {
    await Trabajador.findByIdAndDelete(id);
    res.status(200).json({ message: 'Trabajador eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un trabajador
export const updateTrabajador = async (req, res) => {
  const { id } = req.params;
  const { nombre, genero, edad } = req.body;
  try {
    const trabajadorActualizado = await Trabajador.findByIdAndUpdate(id, { nombre, genero, edad }, { new: true });
    res.status(200).json(trabajadorActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};