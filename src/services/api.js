import axios from 'axios';

// Cria instância base do Axios com URL da API Pokémon
export const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
});

// Função genérica para buscar dados de qualquer endpoint
export const getPokemon = async (url) => {
  try {
    const response = await api.get(url);
    return response.data; // Retorna apenas os dados relevantes
  } catch (error) {
    console.error('Erro na requisição:', error);
    throw error; // Propaga o erro para tratamento posterior
  }
};

// Função específica para listagem paginada
export const getAllPokemon = async (limit = 20, offset = 0) => {
  return getPokemon(`pokemon?limit=${limit}&offset=${offset}`);
};