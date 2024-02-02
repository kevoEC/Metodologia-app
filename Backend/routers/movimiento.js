const express = require('express');
const MovimientoController = require('../controllers/movimiento');

const router = express.Router();

router.post('/movimiento', MovimientoController.crearMovimiento);
router.get('/movimientos', MovimientoController.obtenerMovimientos);
router.put('/movimiento/:id', MovimientoController.actualizarMovimiento);
router.delete('/movimiento/:id', MovimientoController.eliminarMovimiento);

module.exports = router;
