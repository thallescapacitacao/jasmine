class Paciente {

    constructor(nome, idade, peso, altura) {

        this._nome = nome;
        this._idade = idade;
        this._peso = peso;
        this._altura = altura;
    }

    imprime() {

        console.log(`${this._nome} tem ${this._idade} anos`);
    }

    batimentos() {

        return this._idade * 365 * 24 * 60 * 80;
    }

    imc() {

        return this._peso / (this._altura * this._altura);
    }
}