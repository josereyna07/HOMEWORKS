// LinkedListPage.jsx
import React, { useEffect, useState } from "react";
import { LinkedList } from "./LinkedList";

const LinkedListPage = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const list = new LinkedList();
    ["Song 1", "Song 2", "Song 3"].forEach(song => list.append(song));
    setSongs(list.print());
  }, []);

  return (
    <div>
      <h2>Song Playlist</h2>
      <ul>
        {songs.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default LinkedListPage;
