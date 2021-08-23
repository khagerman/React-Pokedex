function Pokecard({ name, id, type, exp }) {
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-title">{name}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <p>Type:{type}</p>
      <p>EXP:{exp}</p>
    </div>
  );
}
