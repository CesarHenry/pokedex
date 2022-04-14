import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { heartClick } = () => {
    console.log('favoritar')
  }
  const heart = "❤️"
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
  );
};

export default Pokemon;
