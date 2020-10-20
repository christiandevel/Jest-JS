import { DataFromApi } from "../promise";

describe("Probar Async/Await", () => {
  
  test("Realizar una peticion a una API", async () => {
    const api = "https://rickandmortyapi.com/api/character/";
    const getRick = "https://rickandmortyapi.com/api/character/1";
    const data = await DataFromApi(api);
    expect(data.results.length).toBeGreaterThan(0);

    const rick = await DataFromApi(getRick);
    expect(rick.name).toEqual("Rick Sanchez");
  });
});