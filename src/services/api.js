import axios from "axios";

export const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/" 
});

export const getAllPokemons = async (limit = 20, offset = 0) => {
    try {
        const response = await api.get(`pokemon?limit=${limit}&offset=${offset}`); 
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar Pokémon:", error);
        return null;
    }
};
