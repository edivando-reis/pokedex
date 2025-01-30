import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemon } from '../services/api';
import { Box, Typography, CircularProgress } from '@mui/material';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(`pokemon/${id}`);
      setPokemon(data);
    };
    fetchData();
  }, [id]);

  if (!pokemon) return <CircularProgress />;

  return (
    <Box>
      <Typography variant="h2">{pokemon.name}</Typography>
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
      />
      <Typography>Height: {pokemon.height}</Typography>
      <Typography>Weight: {pokemon.weight}</Typography>
      <div>
        {pokemon.abilities.map((ability) => (
          <span key={ability.ability.name}>{ability.ability.name} </span>
        ))}
      </div>
    </Box>
  );
};

export default PokemonDetails;