export function validarNombre  (nombre) {
    const length = nombre.length;
    return (length > 1 && length < 30) ? true : false;
};

export function validarApellido  (apellidos) {
    const length = apellidos.length;
    return (length > 1 && length < 50) ? true : false;
};

export function validarTelefono  (telefono) {
    const length = telefono.length;
    return (length >= 8 && length <= 14) ? true : false;
};