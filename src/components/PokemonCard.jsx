import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const PokemonCard = ({ pokemon }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          #{pokemon.id}
        </Typography>
        <div>
          {pokemon.types.map((type) => (
            <span key={type.type.name}>{type.type.name} </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;