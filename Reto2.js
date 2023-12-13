function regalosFabricables(regalos, materialesDisponibles) {
    // Función auxiliar para verificar si un regalo se puede fabricar con los materiales dados
    function sePuedeFabricar(regalo, materiales) {
        const materialesNecesarios = new Set(regalo);
        for (const material of materialesNecesarios) {
            if (!materiales.has(material) || materiales.get(material) === 0) {
                return false;
            }
        }
        return true;
    }

    // Convierte la cadena de materiales en un Map
    const materialesMap = new Map();
    for (const material of materialesDisponibles) {
        if (materialesMap.has(material)) {
            materialesMap.set(material, materialesMap.get(material) + 1);
        } else {
            materialesMap.set(material, 1);
        }
    }

    // Filtrar los regalos que se pueden fabricar
    const regalosFabricados = regalos.filter(regalo => sePuedeFabricar(regalo, materialesMap));

    return regalosFabricados;
}

// Ejemplo de uso corregido
const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';
const regalosFabricados = regalosFabricables(gifts, materials);

console.log("Regalos que se pueden fabricar:", regalosFabricados);
