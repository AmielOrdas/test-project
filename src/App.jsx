import "./App.css";
import { Route, Routes } from "react-router-dom";

import ButtonPage from "./Pages/ButtonPage";
import NarutoPage from "./Pages/NarutoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ButtonPage />} />
      <Route path="/NarutoPage" element={<NarutoPage />} />
    </Routes>
  );
}

export default App;
