describe('Consulta', () => {

    let thalles;

    beforeEach(() => {

        thalles = new PacienteBuilder()
            .comIdade(31)
            .comAltura(1.80)
            .comPeso(86)
            .constroi();
    });

    describe('consultas do tipo retorno', () => {

        it('não deve cobrar nada se for um retorno', () => {
            
            let consulta = new Consulta(thalles, [], true, true);
    
            expect(consulta.preco()).toEqual(0);
        });
    });

    describe('consultas com procedimentos', () => {

        it('deve cobrar 25 por cada procedimento comum', () => {
    
            let consulta = new Consulta(thalles, ['proc1', 'proc2'], true, false);
    
            expect(consulta.preco()).toEqual(50 * 2);
        });
    
        it('deve cobrar preço específico dependendo do procedimento', () => {
    
            let consulta = new Consulta(thalles, ['raio-x', 'gesso'], true, false);
    
            expect(consulta.preco()).toEqual((55 + 32) * 2);
        });

        it('deve dobrar o preço da consulta particular', () => {
    
            let consulta = new Consulta(thalles, ['raio-x', 'gesso', 'procedimento-comum'], true, false);
    
            expect(consulta.preco()).toEqual((55 + 32 + 25) * 2);
        });
    });    
});