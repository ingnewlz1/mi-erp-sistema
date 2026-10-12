const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware: Habilita peticiones entre diferentes puertos/dominios y procesa JSON
app.use(cors());
app.use(express.json());

// Ruta 1: Diagnóstico (Comprobar si el servidor está vivo)
app.get('/api/ping', (req, res) => {
    res.json({ mensaje: "¡El servidor Backend en Node.js está activo y respondiendo!" });
});

// Ruta 2: Recibir datos del nuevo proyecto
app.post('/api/proyectos', (req, res) => {
    // req.body contiene los datos que nos envía el frontend
    const { nombreProyecto, cliente, descripcion } = req.body;

    console.log("📩 Proyecto recibido en la terminal del backend:");
    console.log(`- Nombre: ${nombreProyecto}`);
    console.log(`- Cliente: ${cliente}`);
    console.log(`- Descripción: ${descripcion}`);

    // Respuesta que el servidor le regresa a la página web
    res.json({
        estatus: "éxito",
        mensaje: `Proyecto '${nombreProyecto}' recibido con éxito en el servidor.`
    });
});

// Arrancar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en: http://localhost:${PORT}`);
});