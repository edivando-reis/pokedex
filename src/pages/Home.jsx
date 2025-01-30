import { useEffect, useState } from 'react';
import { Grid2, Container, Button } from '@mui/material';
import PokemonCard from '../components/PokemonCard';
import { getAllPokemon, getPokemon } from '../services/api';
import Loading from '../components/Loading';

const Home = () => {
  // Estado para armazenar a lista de Pokémon
  const [pokemonList, setPokemonList] = useState([]);
  
  // Estados para controle de paginação
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const limit = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        // 1. Busca a lista básica de Pokémon
        const data = await getAllPokemon(limit, offset);
        
        // 2. Busca detalhes completos de cada Pokémon
        const detailedData = await Promise.all(
          data.results.map(async (pokemon) => await getPokemon(pokemon.url))
        );
        
        // 3. Atualiza o estado com os dados completos
        setPokemonList(detailedData);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [offset]); // Executa sempre que o offset mudar

  if (isLoading) return <Loading />;

  return (
    <Container>
      <Grid2 container spacing={3}>
        {/* Mapeia cada Pokémon para um componente Card */}
        {pokemonList.map((pokemon) => (
          <Grid2 item xs={12} sm={6} md={4} key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </Grid2>
        ))}
      </Grid2>

      {/* Controles de paginação */}
      <Button 
        onClick={() => setOffset(prev => Math.max(0, prev - limit))}
        disabled={offset === 0}
      >
        Anterior
      </Button>
      <Button onClick={() => setOffset(prev => prev + limit)}>
        Próximo
      </Button>
    </Container>
  );
};

export default Home;