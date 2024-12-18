import React, { useState, useEffect } from "react";
import SearchBarContainer from "./containers/SearchBarContainer";
import PlaylistContainer from "./containers/PlaylistContainer";
import TracklistContainer from "./containers/TracklistContainer";
import { getAccessToken } from "./modules/spotifyAuth";

function App() {
  const [tracklist, setTracklist] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("");

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      console.log("Successfully authenticated with Spotify!");
    }
  }, []);

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
