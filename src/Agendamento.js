class Agendamento {

    para(consulta) {

        const umDiaEmMilissegundos = 1000 * 60 * 60 * 24,
            vinteDiasEmMilissegundos = umDiaEmMilissegundos * 20;

        let novaData = new Date(
            consulta.data.getTime() + vinteDiasEmMilissegundos
        );

        while(novaData.getDay() == 0 || novaData.getDay() == 6)
            novaData = new Date(novaData.getTime() + umDiaEmMilissegundos);

        return new Consulta(

            consulta.paciente,
            consulta.procedimentos,
            consulta.particular,
            true,
            novaData
        );
    }
}