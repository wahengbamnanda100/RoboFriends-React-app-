import React from "react";

const SearchBox = ({ searchFields, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="text"
        placeholder="Sarach here!"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
