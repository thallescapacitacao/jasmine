class MaiorEMenor {

    constructor() {

        this._numerosEntrada = [];
        this._numerosSaida = [];
    }
    
    encontra(...numeros) {
        
        this._numerosEntrada = numeros;

        this._numerosSaida = this._numerosEntrada.sort((a, b) => a - b);
    }

    pegaMaior() {

        //return this._numerosSaida.pop();
        return [].concat(this._numerosSaida).pop();
        //return this._numerosSaida.reverse()[0];
    }

    pegaMenor() {

        return this._numerosSaida[0];
    }
}