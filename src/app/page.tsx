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

  return (
    <div className="App">
      {/* Show score of each user on top */}
      <Scoreboard scores={scores} />
      <Board setScores={setScores} scores={scores} />
    </div>
  );
};

export default App;
