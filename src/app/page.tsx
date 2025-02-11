"use client";
import React, { useState, useEffect } from "react";
import Board from "@/components/Board";
import Scoreboard from "@/components/Scoreboard";
import "./App.css";

const App: React.FC = () => {
  const [scores, setScores] = useState<{ blue: number; red: number }>({
    blue: 0,
    red: 0,
  });

  // Load scores from localStorage when the component mounts
  useEffect(() => {
    const storedScores = localStorage.getItem("tic-tac-toe-scores");
    if (storedScores) {
      setScores(JSON.parse(storedScores));
    }
  }, []);

  // Save scores to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tic-tac-toe-scores", JSON.stringify(scores));
  }, [scores]);

  // Restart(New Game)
  const handleRestart = () => {
    setScores({ blue: 0, red: 0 }); // Reset scores to 0
  };
  return (
    <div className="App">
      <Scoreboard scores={scores} />
      <Board setScores={setScores} scores={scores} />
      <button className="restart-button" onClick={handleRestart}>
        Restart Game
      </button>
    </div>
  );
};

export default App;
