const Movimiento = require('../models/movimiento');

// Create (Crear)
async function crearMovimiento(datosMovimiento) {
  try {
    const movimiento = await Movimiento.create(datosMovimiento);
    console.log('Movimiento creado:', movimiento);
    return movimiento;
  } catch (error) {
    console.error('Error al crear movimiento:', error);
    throw error;
  }
}

// Read (Leer)
async function obtenerMovimientos() {
  try {
    const movimientos = await Movimiento.find();
    console.log('Movimientos encontrados:', movimientos);
    return movimientos;
  } catch (error) {
    console.error('Error al obtener movimientos:', error);
    throw error;
  }
}

// Update (Actualizar)
async function actualizarMovimiento(id, nuevosDatos) {
  try {
    const movimientoActualizado = await Movimiento.findOneAndUpdate({ _id: id }, nuevosDatos, { new: true });
    console.log('Movimiento actualizado:', movimientoActualizado);
    return movimientoActualizado;
  } catch (error) {
    console.error('Error al actualizar movimiento:', error);
    throw error;
  }
}

// Delete (Eliminar)
async function eliminarMovimiento(id) {
  try {
    const movimientoEliminado = await Movimiento.findOneAndDelete({ _id: id });
    console.log('Movimiento eliminado:', movimientoEliminado);
    return movimientoEliminado;
  } catch (error) {
    console.error('Error al eliminar movimiento:', error);
    throw error;
  }
}

module.exports = {
  crearMovimiento,
  obtenerMovimientos,
  actualizarMovimiento,
  eliminarMovimiento
};
