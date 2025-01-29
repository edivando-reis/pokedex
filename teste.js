import { getAllPokemons } from "./src/services/api.js";

const testGetAllPokemons = async () => {
    console.log("Buscando Pokémons...");
    
    const data = await getAllPokemons(20, 0); // Pegando os primeiros 10 Pokémons

    if (data) {
        console.log("Pokémons encontrados:");
        console.log(data.results); // Exibe a lista de Pokémon no console
    } else {
        console.log("Falha ao obter os dados.");
    }
};

testGetAllPokemons();
