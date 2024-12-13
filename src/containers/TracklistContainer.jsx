import React from "react";
import Tracklist from "../components/Tracklist/Tracklist";

function TracklistContainer({ tracklist, playlist, setPlaylist }) {
  const handleAddTrack = (trackId) => {
    const trackToAdd = tracklist.find((track) => track.id === trackId);
    if (!playlist.find((track) => track.id === trackId)) {
      setPlaylist([...playlist, trackToAdd]);
    }
  };

  return <Tracklist tracklist={tracklist} onAddTrack={handleAddTrack} />;
}

export default TracklistContainer;
