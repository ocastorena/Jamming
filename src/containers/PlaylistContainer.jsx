import React from "react";
import Playlist from "../components/Playlist/Playlist";

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

function PlaylistContainer() {
  const [playlist, setPlaylist] = React.useState(mockTracks);

  const handleRemoveTrack = (trackId) => {
    setPlaylist(playlist.filter((track) => track.id !== trackId));
  };

  const handleAddTrack = (trackId) => {
    if (!playlist.find((track) => track.id === trackId)) {
      const track = mockTracks.find((track) => track.id === trackId);
      setPlaylist([...playlist, track]);
    }
  }

  const [playlistName, setPlaylistName] = React.useState("");

  const handleUpdateName = (event) => {
    setPlaylistName(event.target.value);
  };

  return (
    <Playlist
      name={playlistName}
      onChange={handleUpdateName}
      playlist={mockTracks}
      onRemoveTrack={handleRemoveTrack}
    />
  );
}

export default PlaylistContainer;
