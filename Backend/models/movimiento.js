const mongoose = require('mongoose');

const movimientoSchema = new mongoose.Schema({
  codigoCompania: { type: Number, required: true },
  codigoTrabajador: { type: Number, required: true },
  codigoConcepto: { type: Number, required: true },
  anio: { type: Number, required: true },
  importeConcepto: { type: Number, required: true },
  tipoOperacion: { type: String, enum: ['ingreso', 'egreso'], required: true },
});

const Movimiento = mongoose.model('Movimiento', movimientoSchema);

module.exports = Movimiento;
