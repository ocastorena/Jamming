import React from "react";
import Tracklist from "../components/Tracklist/Tracklist";

function TracklistContainer(props) {

  return <Tracklist tracklist={props.tracklist} />;
}

export default TracklistContainer;
