import React from "react";

const Pagination = (props) => {
  const { page, totalPages, previousClick, nextClick } = props;

  return (
    <div className="pagination__container">
      <button onClick={previousClick}>
        <div>↼</div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={nextClick}>
        <div>⇁</div>
      </button>
    </div>
  );
};

export default Pagination;
