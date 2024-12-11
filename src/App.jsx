import React from "react";
import SearchBarContainer from "./containers/SearchBarContainer";
import SearchResultsContainer from "./containers/SearchResultsContainer";
import PlaylistContainer from "./containers/PlaylistContainer";
import TracklistContainer from "./containers/TracklistContainer";

function App() {
  return (
    <>
      <SearchBarContainer />
      <SearchResultsContainer />
      <PlaylistContainer />
      <TracklistContainer />
    </>
  );
}

export default App;
