import { useState } from "react";

/**
 * Search bar to search items from a database
 * @param placeholder
 * @returns {JSX.Element}
 * @constructor
 */
const SearchBarMolecule = ({ placeholder }) => {
  const [search, setSearch] = useState("");

  const handleKeyPress = (e) => {
    // keycode 13 is for the enter key
    e.keyCode === 13 ? console.log("Enter") : console.log("search", search);
  };

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        onKeyDown={handleKeyPress}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default SearchBarMolecule;
