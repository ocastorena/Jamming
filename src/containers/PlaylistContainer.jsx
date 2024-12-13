import React from "react";
import Playlist from "../components/Playlist/Playlist";

function PlaylistContainer({
  playlist,
  setPlaylist,
  playlistName,
  setPlaylistName,
}) {
  const handleRemoveTrack = (trackId) => {
    setPlaylist(playlist.filter((track) => track.id !== trackId));
  };

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const handleSaveToSpotify = () => {
    console.log("Saving playlist to Spotify...");
    const trackURIs = playlist.map((track) => track.uri);
    console.log(trackURIs);
    setPlaylist([]);
    setPlaylistName("");
  };

  return (
    <Playlist
      playlistName={playlistName}
      onNameChange={handlePlaylistNameChange}
      playlist={playlist}
      onRemoveTrack={handleRemoveTrack}
      onClick={handleSaveToSpotify}
    />
  );
}

export default PlaylistContainer;
