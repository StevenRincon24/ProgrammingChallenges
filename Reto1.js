function findFirstRepeated(gifts) {
    let numerosVistos = new Set();
    for (let i = 0; i < gifts.length; i++) {
        if (numerosVistos.has(gifts[i])) {
            return gifts[i];
        } else {
            numerosVistos.add(gifts[i]);
        }
    }
    return -1;
}

let gifts = [2, 1, 3, 5, 3, 2]
let resultado = findFirstRepeated(gifts);
console.log(resultado);