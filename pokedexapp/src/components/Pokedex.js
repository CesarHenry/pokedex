import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;

  const handlePreviousClick = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  function handleNextClick() {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  }

  return (
    <div>
      <div className="pokedex__header">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          previousClick={handlePreviousClick}
          nextClick={handleNextClick}
        />
      </div>
      {loading ? (
        <div>Carregando, Segura a fera ...</div>
      ) : (
        <div className="pokedex__grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return (
                <div key={index}>
                  <Pokemon key={index} pokemon={pokemon} />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
