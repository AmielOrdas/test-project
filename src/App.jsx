import "./App.css";
import { Route, Routes } from "react-router-dom";

import ButtonPage from "./Pages/ButtonPage";
import PokemonPage from "./Pages/PokemonPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ButtonPage />} />
      <Route path="/PokemonPage" element={<PokemonPage />} />
    </Routes>
  );
}

export default App;
