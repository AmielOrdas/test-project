import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header className="flex justify-between bg-cyan-400 p-5 ">
      <header className="text-[33px] text-amber-400">Test Project</header>
      <nav>
        <ul className="flex p-2">
          <li>
            <Link to="/" className="m-2 text-gray-600">
              Button
            </Link>
          </li>
          <li>
            <Link to="/PokemonPage" className="text-gray-600">
              Pokemon
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
