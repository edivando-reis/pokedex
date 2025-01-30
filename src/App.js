import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importações CORRETAS (usando caminhos relativos dentro de src)
import Home from './pages/Home.jsx';
import PokemonDetails from './pages/PokemonDetails.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;