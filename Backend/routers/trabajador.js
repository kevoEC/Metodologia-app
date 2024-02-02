// trabajadorRoutes.js

const express = require('express');
const TrabajadorController = require('../controllers/trabajador');

const router = express.Router();

router.post('/trabajador', TrabajadorController.crearTrabajador);
router.get('/trabajadores', TrabajadorController.obtenerTrabajadores);
router.put('/trabajador/:id', TrabajadorController.actualizarTrabajador);
router.delete('/trabajador/:id', TrabajadorController.eliminarTrabajador);

module.exports = router;
