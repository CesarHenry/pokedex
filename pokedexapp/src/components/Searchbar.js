import React from "react";

const Searchbar = (props) => {
  const [search, setSearch] = React.useState();
  const { onSearch } = props;

  const handleChange = (event) => {
    setSearch(event.target.value.toLowerCase());
    if (event.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const handleClick = () => {
    onSearch(search);
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
    </div>
  );
};

export default Searchbar;
