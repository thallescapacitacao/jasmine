describe("Maior e Menor", () => {

    it("deve entender números em ordem não sequencial", () => {

        var algoritmo = new MaiorEMenor();

        algoritmo.encontra(5,15,7,9);

        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("deve entender números em ordem decrescente", () => {

        var algoritmo = new MaiorEMenor();

        algoritmo.encontra(9,8,7,6);

        expect(algoritmo.pegaMaior()).toEqual(9);
        expect(algoritmo.pegaMenor()).toEqual(6);
    });

    it("deve suportar sucessivas chamadas ao método pegaMaior", () => {

        var algoritmo = new MaiorEMenor();

        algoritmo.encontra(9,8,7,6);

        for (let i = 0; i < 3; i++)
            expect(algoritmo.pegaMaior()).toEqual(9);
    });

    it("deve suportar chamadas aos métodos pegaMaior e pegaMenor com nenhum parâmetro passado", () => {

        var algoritmo = new MaiorEMenor();

        algoritmo.encontra();

        expect(algoritmo.pegaMaior()).toEqual(undefined);
        expect(algoritmo.pegaMenor()).toEqual(undefined);
    });

    it("deve funcionar com apenas 1 elemento", () => {

        var algoritmo = new MaiorEMenor();

        algoritmo.encontra(5);

        expect(algoritmo.pegaMaior()).toEqual(5);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });
});