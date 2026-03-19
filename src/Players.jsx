import React, { useEffect, useState } from "react";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="card">
      <h3>Players: {players.length}</h3>

      <ol>
        {players.map((player) => (
          <li key={player.id}>{player.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default Players;
