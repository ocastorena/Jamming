import React, { useEffect } from "react";
import Playlist from "../components/Playlist/Playlist";
import {
  redirectToSpotifyAuth,
  getAccessToken,
  makeAuthenticatedRequest,
} from "../modules/spotifyAuth";

var stateKey = "spotify_auth_state";

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

  const handleSaveToSpotify = async () => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      redirectToSpotifyAuth();
      return;
    }

    console.log("Saving playlist to Spotify...");
    const trackURIs = playlist.map((track) => track.uri);
    console.log(trackURIs);
  };

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      console.log("Successfully authenticated with Spotify!");
      console.log(accessToken);
    }
  }, []);

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
