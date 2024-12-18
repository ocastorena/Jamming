import React, { useState } from "react";
import Playlist from "../components/Playlist/Playlist";
import Toast from "../components/Toast/Toast";
import { makeAuthenticatedRequest } from "../modules/spotifyAuth";

function PlaylistContainer({
  playlist,
  setPlaylist,
  playlistName,
  setPlaylistName,
}) {
  const [successMessage, setSuccessMessage] = useState();

  const handleRemoveTrack = (trackId) => {
    setPlaylist(playlist.filter((track) => track.id !== trackId));
  };

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const handleSaveToSpotify = async () => {
    console.log("Saving playlist to Spotify...");
    const trackURIs = playlist.map((track) => track.uri);

    try {
      // get user's ID
      const userUrl = "https://api.spotify.com/v1/me";
      const user = await makeAuthenticatedRequest(userUrl);
      const userId = user.id;

      // create a new playlist
      const createPlaylistUrl = `https://api.spotify.com/v1/users/${userId}/playlists`;
      const playlistData = {
        name: playlistName,
        public: false,
      };
      const newPlaylist = await makeAuthenticatedRequest(createPlaylistUrl, {
        method: "POST",
        body: JSON.stringify(playlistData),
      });

      // add tracks to the new playlist
      const playlistId = newPlaylist.id;
      const addTracksUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
      await makeAuthenticatedRequest(addTracksUrl, {
        method: "POST",
        body: JSON.stringify({ uris: trackURIs }),
      });

      console.log("Playlist saved to Spotify!");
      setSuccessMessage({
        message: "Playlist saved to Spotify successfully!",
        type: "success",
      });

      // clear the playlist and playlist name
      setPlaylist([]);
      setPlaylistName("");
    } catch (error) {
      setSuccessMessage({
        message: "Error saving playlist to Spotify: " + error.message,
        type: "error",
      });
    }
    setTimeout(() => {
      setSuccessMessage("");
    }, 4000);
  };

  return (
    <>
      <Playlist
        playlistName={playlistName}
        onNameChange={handlePlaylistNameChange}
        playlist={playlist}
        onRemoveTrack={handleRemoveTrack}
        onClick={handleSaveToSpotify}
      />
      {successMessage && (
        <Toast message={successMessage} onClose={() => setSuccessMessage("")} />
      )}
    </>
  );
}

export default PlaylistContainer;
