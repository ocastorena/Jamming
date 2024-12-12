import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <form className={styles.searchBar} onSubmit={(e) => e.defaultPrevented}>
      <input
        type="text"
        placeholder="Search for an artist..."
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
