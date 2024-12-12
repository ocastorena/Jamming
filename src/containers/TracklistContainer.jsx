import React from "react";
import Tracklist from "../components/Tracklist/Tracklist";

const mockTracks = [
  { id: 1, name: "Blinding Lights", artist: "The Weeknd", album: "After Hours" },
  { id: 2, name: "Watermelon Sugar", artist: "Harry Styles", album: "Fine Line" },
  { id: 3, name: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia" },
  { id: 4, name: "Save Your Tears", artist: "The Weeknd", album: "After Hours" },
  { id: 5, name: "Peaches", artist: "Justin Bieber", album: "Justice" },
];

function TracklistContainer() {
  return <Tracklist tracklist={mockTracks}/>;
}

export default TracklistContainer;
