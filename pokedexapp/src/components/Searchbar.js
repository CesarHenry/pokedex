import React from "react";
import { searchPokemon } from "../Api";

const Searchbar = () => {
  const [search, setSearch] = React.useState();
  const [pokemon, setPokemon] = React.useState();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    handleOnSearch(search);
  };

  const handleOnSearch = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };
  return (
    <div className="searchbar__container">
      <div className="searchbar">
        <input
          placeholder="Buscar Pokemon"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="searchbar__btn">
        <button onClick={handleClick}>Buscar</button>
      </div>
      {pokemon ? (
        <ul>
          <li>Nome: {pokemon.name}</li>
          <li>Peso: {pokemon.weight}</li>
          <li>
            <img src={pokemon.sprites.front_default} alt="{pokemon.name}" />
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Searchbar;
