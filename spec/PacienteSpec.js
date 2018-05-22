describe('Paciente', () => {

    it('deve calcular o imc do paciente', () => {

        let thalles = new Paciente('Thalles Gomes de Carvalho', 35, 82.3, 1.82);

        let imc = thalles.imc();

        expect(imc).toEqual(82.3 / (1.82 * 1.82));
    });
    
    it('deve calcular os batimentos do paciente', () => {

        let thalles = new Paciente('Thalles Gomes de Carvalho', 35, 82.3, 1.82);

        let batimentos = thalles.batimentos();

        expect(batimentos).toEqual(35 * 365 * 24 * 60 * 80);
    })  
})