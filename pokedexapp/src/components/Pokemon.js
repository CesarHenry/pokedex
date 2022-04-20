import React from "react";
import FavoritesContext from "../contexts/FavoritesContext";

const Pokemon = (props) => {
  const { favoritePokemons, updateFavoritePokemons } =
    React.useContext(FavoritesContext);
  const { pokemon } = props;

  const heartClick = () => {
    updateFavoritePokemons(pokemon.name);
    console.log("favoritou");
  };
  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🤍";
  return (
    <div className="pokemon__card">
      <div className="pokemon__img__container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon__img"
        />
      </div>
      <div className="card__body">
        <div className="card__top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card__bottom">
          <div className="pokemon__type">
            <div>
              {pokemon.types.map((type, index) => {
                return (
                  <div key={index} className="pokemon__type__text">
                    {type.type.name}
                  </div>
                );
              })}
            </div>
          </div>
          <button className="pokemon__heart__btn" onClick={heartClick}>
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
