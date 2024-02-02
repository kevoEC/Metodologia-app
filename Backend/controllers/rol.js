const RolPago = require('../models/rol');

// Create (Crear)
async function crearRolPago(datosRolPago) {
  try {
    const rolPago = await RolPago.create(datosRolPago);
    console.log('Rol de Pago creado:', rolPago);
    return rolPago;
  } catch (error) {
    console.error('Error al crear Rol de Pago:', error);
    throw error;
  }
}

// Read (Leer)
async function obtenerRolesPago() {
  try {
    const rolesPago = await RolPago.find();
    console.log('Roles de Pago encontrados:', rolesPago);
    return rolesPago;
  } catch (error) {
    console.error('Error al obtener Roles de Pago:', error);
    throw error;
  }
}

// Update (Actualizar)
async function actualizarRolPago(id, nuevosDatos) {
  try {
    const rolPagoActualizado = await RolPago.findOneAndUpdate({ _id: id }, nuevosDatos, { new: true });
    console.log('Rol de Pago actualizado:', rolPagoActualizado);
    return rolPagoActualizado;
  } catch (error) {
    console.error('Error al actualizar Rol de Pago:', error);
    throw error;
  }
}

// Delete (Eliminar)
async function eliminarRolPago(id) {
  try {
    const rolPagoEliminado = await RolPago.findOneAndDelete({ _id: id });
    console.log('Rol de Pago eliminado:', rolPagoEliminado);
    return rolPagoEliminado;
  } catch (error) {
    console.error('Error al eliminar Rol de Pago:', error);
    throw error;
  }
}

module.exports = {
  crearRolPago,
  obtenerRolesPago,
  actualizarRolPago,
  eliminarRolPago
};
