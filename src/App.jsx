import React, { useState } from "react";
import SearchBarContainer from "./containers/SearchBarContainer";
import PlaylistContainer from "./containers/PlaylistContainer";
import TracklistContainer from "./containers/TracklistContainer";

const mockTracks = [
  {
    id: 1,
    name: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    uri: "spotify:track:0VjIjW4GlUZAMYd2vXMi3b",
  },
  {
    id: 2,
    name: "Watermelon Sugar",
    artist: "Harry Styles",
    album: "Fine Line",
    uri: "spotify:track:6UelLqGlWMcVH1E5c4H7lY",
  },
  {
    id: 3,
    name: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    uri: "spotify:track:463CkQjx2Zk1yXoBuierM9",
  },
  {
    id: 4,
    name: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
    uri: "spotify:track:5QO79kh1waicV47BqGRL3g",
  },
  {
    id: 5,
    name: "Peaches",
    artist: "Justin Bieber",
    album: "Justice",
    uri: "spotify:track:4iJyoBOLtHqaGxP12qzhQI",
  },
];

function App() {
  const [tracklist, setTracklist] = useState(mockTracks);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("");

  return (
    <>
      <SearchBarContainer />
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
