import React from "react";
import Track from "../Track/Track";
import styles from "./Playlist.module.css";

function Playlist({
  playlist,
  onRemoveTrack,
  onNameChange,
  playlistName,
  onClick,
}) {
  return (
    <div className={styles.playlist}>
      <input
        type="text"
        onChange={onNameChange}
        placeholder="Enter playlist name..."
        value={playlistName}
      ></input>
      <ul>
        {playlist.map((track) => (
          <Track
            key={track.id}
            track={track}
            symbol="-"
            onClick={onRemoveTrack}
          />
        ))}
      </ul>
      <button
        className={styles.saveButton}
        disabled={playlist.length === 0 || playlistName === ""}
        onClick={onClick}
      >
        Save to Spotify
      </button>
    </div>
  );
}

export default Playlist;
