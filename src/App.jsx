import React, { useState, useEffect } from "react";
import SearchBarContainer from "./containers/SearchBarContainer";
import PlaylistContainer from "./containers/PlaylistContainer";
import TracklistContainer from "./containers/TracklistContainer";

function App() {
  const [tracklist, setTracklist] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("");

  return (
    <>
      <SearchBarContainer setTracklist={setTracklist} />
      <TracklistContainer
        tracklist={tracklist}
        playlist={playlist}
        setPlaylist={setPlaylist}
      />
      <PlaylistContainer
        playlist={playlist}
        setPlaylist={setPlaylist}
        playlistName={playlistName}
        setPlaylistName={setPlaylistName}
      />
    </>
  );
}

export default App;
