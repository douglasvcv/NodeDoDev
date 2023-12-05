function calculo(distancia, tipo){
 
    let carro = [16, 11]


    if(distancia < 0){
        return false
    }
    if(tipo == "etanol"){
        let etanol = distancia/carro[1]
        return etanol
    }
    if(tipo == "gasolina"){
        let gasolina = distancia/carro[0]
        return gasolina
    }
}


module.exports = {calculo}