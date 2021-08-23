import React from "react";

import "./Pokecard.css";
function Pokecard({ name, id, type, exp }) {
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-title">{name}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="pokemon"
      />
      <p>Type: {type}</p>
      <p>EXP:{exp}</p>
    </div>
  );
}

export default Pokecard;
