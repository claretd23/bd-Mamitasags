import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { getTrabajadores, createTrabajador, deleteTrabajador, updateTrabajador } from './Controllers/trabajadorController.js';
import { getBebidas, createBebida } from './Controllers/bebidaController.js';
import { getEvents, createEvent } from "./Controllers/EventsController.js";

mongoose.connect("mongodb://localhost:27017/ClubNocturno") 
.then(() => {
    console.log("Conexión a la base de datos establecida");
}).catch(err => {
    console.log("Error al conectar a la base de datos", err);
});

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.get('/api/trabajadores', getTrabajadores);
app.post('/api/trabajadores', createTrabajador);
app.delete('/api/trabajadores/:id', deleteTrabajador);
app.put('/api/trabajadores/:id', updateTrabajador);

app.get('/api/bebidas', getBebidas);
app.post('/api/bebidas', createBebida);

app.get('/api/events', getEvents);
app.post('/api/events', createEvent);

app.listen(4000, () => {
    console.log("Servidor en puerto 4000");
});

