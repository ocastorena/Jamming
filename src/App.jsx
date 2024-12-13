import React, { useState } from "react";
import SearchBarContainer from "./containers/SearchBarContainer";
import Playlist from "./components/Playlist/Playlist";
import Tracklist from "./components/Tracklist/Tracklist";

const mockTracks = [
  {
    id: 1,
    name: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
  },
  {
    id: 2,
    name: "Watermelon Sugar",
    artist: "Harry Styles",
    album: "Fine Line",
  },
  { id: 3, name: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia" },
  {
    id: 4,
    name: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
  },
  { id: 5, name: "Peaches", artist: "Justin Bieber", album: "Justice" },
];

function App() {
  const [tracklist, setTracklist] = useState(mockTracks);

  const handleAddTrack = (trackId) => {
    const trackToAdd = tracklist.find((track) => track.id === trackId);
    if (!playlist.find((track) => track.id === trackId)) {
      setPlaylist([...playlist, trackToAdd]);
    }
  };

  const [playlist, setPlaylist] = useState([]);

  const handleRemoveTrack = (trackId) => {
    const trackToRemove = playlist.find((track) => track.id === trackId);
    setPlaylist(playlist.filter((track) => track.id !== trackToRemove.id));
  };

  const [playlistName, setPlaylistName] = useState("");

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  return (
    <>
      <SearchBarContainer />
      <Tracklist tracklist={tracklist} onAddTrack={handleAddTrack} />
      <Playlist
        playlist={playlist}
        onRemoveTrack={handleRemoveTrack}
        onNameChange={handlePlaylistNameChange}
        playlistName={playlistName}
      />
    </>
  );
}

export default App;
