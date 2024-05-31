import { useState } from "react";

// styling
import styles from "../../styles/molecule/Search.module.css";

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
    <div className={styles.container}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onKeyDown={handleKeyPress}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBarMolecule;
