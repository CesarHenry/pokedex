import React from "react";
import FavoritesContext from "../contexts/FavoritesContext";

const Navbar = () => {
  const { favoritePokemons } = React.useContext(FavoritesContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img className="navbar__img" src={logoImg} alt="pokeapi-logo" />
      </div>
      <div>{favoritePokemons.length}❤️ Favoritos</div>
    </nav>
  );
};

export default Navbar;
