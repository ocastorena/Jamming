import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ search, setSearch, handleSubmit }) {
  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a track..."
        value={search}
        className={styles.searchInput}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
