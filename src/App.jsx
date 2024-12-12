import React from "react";
import SearchBarContainer from "./containers/SearchBarContainer";
import PlaylistContainer from "./containers/PlaylistContainer";
import TracklistContainer from "./containers/TracklistContainer";

function App() {
  return (
    <>
      <SearchBarContainer />
      <TracklistContainer />
      <PlaylistContainer />
    </>
  );
}

export default App;
