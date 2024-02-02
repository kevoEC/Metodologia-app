const mongoose = require('mongoose');

const trabajadorSchema = new mongoose.Schema({
  codigoCompania: { type: Number, required: true },
  nombreCompania: { type: String, required: true },
  codigoEmpleado: { type: Number, required: true },
  tipoEmpleado: { type: String, enum: ['empleado', 'gerente', 'director'], required: true },
  apellidoPaterno: { type: String, required: true },
  apellidoMaterno: { type: String, required: true },
  nombres: { type: String, required: true },
  sexo: { type: String, enum: ['masculino', 'femenino', 'otro'], required: true },
  numeroCedula: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono1: { type: String, required: true },
  telefono2: { type: String },
  tipoContrato: { type: String, enum: ['contrato1', 'contrato2'], required: true },
  carnetIess: { type: String, required: true },
  idCategoriaOcupacion: { type: Number, required: true },
  nombreCategoria: { type: String, required: true },
  codigoOcupacion: { type: Number, required: true },
  nombreOcupacion: { type: String, required: true },
  tipoComision: { type: String, enum: ['comision1', 'comision2'], required: true },
  nivelSalarialId: { type: Number, required: true },
  nombreNivelSalarial: { type: String, required: true },
  estadoCivil: { type: String, enum: ['soltero', 'casado', 'divorciado', 'viudo'], required: true },
  centroCostosId: { type: Number, required: true },
  numeroCostos: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  fechaIngreso: { type: Date, required: true },
  cuentaBancaria: { type: String, required: true },
  banco: { type: String, required: true },
  tipoCuenta: { type: String, enum: ['cuenta1', 'cuenta2'], required: true },
  bonificacionEspecial: { type: Number, required: true },
  sueldoBase: { type: Number, required: true },
  formaCalculo13: { type: String, enum: ['formula1', 'formula2'], required: true },
  fondo: { type: String, enum: ['fondo1', 'fondo2'], required: true },
  formaCalculo14: { type: String, enum: ['formula1', 'formula2'], required: true },
  reingreso: { type: String, enum: ['si', 'no'], required: true },
  fechaReingreso: { type: Date },
});

const Trabajador = mongoose.model('Trabajador', trabajadorSchema);

module.exports = Trabajador;
