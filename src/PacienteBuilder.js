class PacienteBuilder {

    constructor() {

        this._nome = 'Thalles Gomes de Carvalho';
        this._idade = 35;
        this._peso = 82;
        this._altura = 1.82;
    }

    constroi() {

        return new Paciente(
            this._nome,
            this._idade,
            this._peso,
            this._altura
        );
    }

    comNome(valor) {

        this._nome = valor;
        return this;
    }

    comIdade(valor) {

        this._idade = valor;
        return this;
    }

    comPeso(valor) {

        this._peso = valor;
        return this;
    }

    comAltura(valor) {

        this._altura = valor;
        return this;
    }
}