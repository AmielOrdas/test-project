import React from "react";
import Pokemon from "../Pokemon";
import Navigation from "../Navigation";

function PokemonPage() {
  return (
    <>
      <Navigation />
      <main>
        <div>
          <Pokemon />
        </div>
      </main>
    </>
  );
}

export default PokemonPage;
