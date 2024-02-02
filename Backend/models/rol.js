const mongoose = require('mongoose');

const rolPagoSchema = new mongoose.Schema({
  codigoCompania: { type: Number, required: true },
  anio: { type: Number, required: true },
  mes: { type: String, required: true },
  usuario: { type: String, required: true },
  fechaCreacion: { type: Date, required: true },
  // Añade más campos según sea necesario
});

const RolPago = mongoose.model('RolPago', rolPagoSchema);

module.exports = RolPago;
