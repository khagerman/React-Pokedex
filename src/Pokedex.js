import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex({ pokemon }) {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-cards">
        {pokemon.map((i) => (
          <Pokecard
            key={i.id}
            name={i.name}
            id={i.id}
            type={i.type}
            exp={i.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
