import React from "react";

interface ScoreboardProps {
  scores: { blue: number; red: number };
}

const Scoreboard: React.FC<ScoreboardProps> = ({ scores }) => (
  <div className="scoreboard">
    <div className="score blue-score">Blue: {scores.blue}</div>
    <div className="score red-score">Red: {scores.red}</div>
  </div>
);

export default Scoreboard;
