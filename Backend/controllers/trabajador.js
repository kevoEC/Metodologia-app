const Trabajador = require('../models/trabajador');

// Create (Crear)
async function crearTrabajador(datosTrabajador) {
  try {
    const trabajador = await Trabajador.create(datosTrabajador);
    console.log('Trabajador creado:', trabajador);
    return trabajador;
  } catch (error) {
    console.error('Error al crear trabajador:', error);
    throw error;
  }
}

// Read (Leer)
async function obtenerTrabajadores() {
  try {
    const trabajadores = await Trabajador.find();
    console.log('Trabajadores encontrados:', trabajadores);
    return trabajadores;
  } catch (error) {
    console.error('Error al obtener trabajadores:', error);
    throw error;
  }
}

// Update (Actualizar)
async function actualizarTrabajador(id, nuevosDatos) {
  try {
    const trabajadorActualizado = await Trabajador.findOneAndUpdate({ _id: id }, nuevosDatos, { new: true });
    console.log('Trabajador actualizado:', trabajadorActualizado);
    return trabajadorActualizado;
  } catch (error) {
    console.error('Error al actualizar trabajador:', error);
    throw error;
  }
}

// Delete (Eliminar)
async function eliminarTrabajador(id) {
  try {
    const trabajadorEliminado = await Trabajador.findOneAndDelete({ _id: id });
    console.log('Trabajador eliminado:', trabajadorEliminado);
    return trabajadorEliminado;
  } catch (error) {
    console.error('Error al eliminar trabajador:', error);
    throw error;
  }
}

module.exports = {
  crearTrabajador,
  obtenerTrabajadores,
  actualizarTrabajador,
  eliminarTrabajador
};
