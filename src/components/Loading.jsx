import { CircularProgress, Box, Typography } from '@mui/material';

const Loading = () => {
  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      height="100vh"
      flexDirection="column"
    >
      <CircularProgress size={60} />
      <Typography variant="h6" mt={2}>
        Carregando Pokémon...
      </Typography>
    </Box>
  );
};

export default Loading;