import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { makeAuthenticatedRequest } from "../modules/spotifyAuth";

function SearchBarContainer({ setTracklist }) {
  const [search, setSearch] = useState("");

  const handleSearchForArtist = async (e) => {
    e.preventDefault();
    if (search === "") {
      return;
    }

    console.log(`Searching for ${search}...`);

    const searchUrl = `https://api.spotify.com/v1/search?q=${search}&type=track`;

    try {
      const data = await makeAuthenticatedRequest(searchUrl);
      console.log(data);
      const newTracklist = data.tracks.items.map((track) => ({
        id: track.id,
        title: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
        albumImage: track.album.images[0]?.url, // Get the album image URL
      }));

      setTracklist(newTracklist);
    } catch (error) {
      console.error("Error fetching data from Spotify API:", error);
    }
  };

  return (
    <SearchBar
      search={search}
      setSearch={setSearch}
      handleSubmit={handleSearchForArtist}
    />
  );
}

export default SearchBarContainer;
