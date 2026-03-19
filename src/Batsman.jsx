import { useState } from "react";

const Batsman = () => {
  const [runs, setRuns] = useState(0);

  const [sixes, setSixes] = useState(0);

  const [fours, setFours] = useState(0);

  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };

  const handleFours = () => {
    const updatedRuns = runs + 4;
    const updatedFours = fours + 1;
    setRuns(updatedRuns);
    setFours(updatedFours);
  };

  const handleSixes = () => {
    const updatedRuns = runs + 6;
    const updatedSixes = sixes + 1;
    setRuns(updatedRuns);
    setSixes(updatedSixes);
  };

  return (
    <div className="card">
      <h3>Player: Bangla Batsman</h3>

      <p>
        <small>Fours: {fours}</small>
      </p>

      <p>
        <small>Sixes : {sixes}</small>
      </p>
      {runs > 50 && <p>Your Score: 50</p>}
      <h1>Score: {runs}</h1>

      <button onClick={handleSingle}>Single</button>
      <button onClick={handleFours}>Four</button>
      <button onClick={handleSixes}>Six</button>
    </div>
  );
};

export default Batsman;
