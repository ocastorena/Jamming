import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";

function SearchBarContainer() {
  const [search, setSearch] = useState("");

  return <SearchBar search={search} setSearch={setSearch} />;
}

export default SearchBarContainer;
