import { DataFromApi } from '../promise'

describe("Probando promesas", () => {
    test("Realizando una petición a una api", done => {
        const api = "https://rickandmortyapi.com/api/character";
        DataFromApi(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
            done();
        });
    });
});