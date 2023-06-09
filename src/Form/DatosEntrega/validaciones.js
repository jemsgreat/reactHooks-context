export function validarDirrecion (dirrecion) {
    const length = dirrecion.length;
    return (length > 4 ) ? true : false;
}

export function validarCiudad (ciudad) {
    const length = ciudad.length;
    return (length > 4 ) ? true : false;
}

export function validarProvincia (provincia) {
    const length = provincia.length;
    return (length > 4 ) ? true : false;
}