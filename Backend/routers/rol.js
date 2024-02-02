const express = require('express');
const RolPagoController = require('../controllers/rol');

const router = express.Router();

router.post('/rolpago', RolPagoController.crearRolPago);
router.get('/rolespago', RolPagoController.obtenerRolesPago);
router.put('/rolpago/:id', RolPagoController.actualizarRolPago);
router.delete('/rolpago/:id', RolPagoController.eliminarRolPago);

module.exports = router;
