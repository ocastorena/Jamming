import React from "react";
import styles from "./SearchResults.module.css";

function SearchResults() {
  return (
    <div className={styles.searchResults}>
      <h2>Search Results</h2>
      <ul>
        <li>Track 1</li>
        <li>Track 2</li>
        <li>Track 3</li>
      </ul>
    </div>
  );
}

export default SearchResults;
