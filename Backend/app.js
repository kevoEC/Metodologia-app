const express = require('express');
const trabajadorRoutes = require('./routers/trabajador');
const movimientoRoutes = require('./routers/movimiento');
const rolPagoRoutes = require('./routers/rol');

const app = express();

// Rutas
app.use('/api', trabajadorRoutes);
app.use('/api', movimientoRoutes);
app.use('/api', rolPagoRoutes);

// Otro middleware y configuración...

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
