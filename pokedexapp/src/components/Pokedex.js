import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading } = props;

  return (
    <div>
      <div className="pokedex__header">
        <h1>Pokedex</h1>
        <div>Paginação</div>
      </div>
      {loading ? (
        <div>
          Carregando, Segura a fera ...
        </div>
      ) : (
        <div className="pokedex__grid">
          {pokemons && pokemons.map((pokemon, index) => {
            return (
              <div>
                <Pokemon key={index} pokemon={pokemon}/>
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
