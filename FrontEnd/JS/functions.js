function limpiarCampos() {
    // Obtener todos los elementos de entrada del formulario
    var campos = document.getElementById('trabajadorForm').querySelectorAll('input, select');

    // Iterar sobre cada campo y limpiar su valor
    campos.forEach(function(campo) {
        campo.value = '';
    });
}
