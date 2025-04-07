import React, { useState } from "react";
import { LinkedList } from "./LinkedList";

const SongList = () => {
  const [list] = useState(new LinkedList());
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState("");

  const handleAddSong = () => {
    if (newSong.trim()) {
      list.append(newSong.trim());
      setSongs(list.toArray());
      setNewSong(""); // Limpiar el input
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎵 Song Playlist</h2>
      
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter a song name"
          value={newSong}
          onChange={(e) => setNewSong(e.target.value)}
          style={{ marginRight: "8px", padding: "5px" }}
        />
        <button onClick={handleAddSong}>Add Song</button>
      </div>

      {songs.length === 0 ? (
        <p>No songs yet. Add some!</p>
      ) : (
        <ul>
          {songs.map((song, idx) => (
            <li key={idx}>{song}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SongList;
