describe('NumeraisRomanos', () => {

    it('transforma os números romanos "I", "IV" e "XVI" nos cardinais "1", "4" e "16"', () => {

        let romanos = new NumeraisRomanos("I", "IV", "XVI");

        let arabicos = romanos.paraArabico();

        expect(arabicos).toEqual([1, 4, 16]);
    });
});