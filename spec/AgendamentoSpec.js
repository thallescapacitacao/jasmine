describe('Agendamento', () => {

    let thalles, agenda;

    beforeEach(() => {

        thalles = new PacienteBuilder().constroi();
    
        agenda = new Agendamento();
    });

    it('deve pular fins de semana', () => {

        let consulta = new Consulta(thalles, [], false, false, new Date(2014, 5, 30));

        let novaConsulta = agenda.para(consulta);

        expect(novaConsulta.data.toString()).toEqual(new Date(2014, 6, 21).toString());
    });
});