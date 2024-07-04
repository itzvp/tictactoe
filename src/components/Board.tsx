// import React, { useState } from "react";
// import Square from "./Square";

// interface BoardProps {
//   scores: { blue: number; red: number };
//   setScores: (scores: { blue: number; red: number }) => void;
// }

// const Board: React.FC<BoardProps> = ({ scores, setScores }) => {
//   const [squares, setSquares] = useState<Array<string | null>>(
//     Array(9).fill(null)
//   );
//   const [isBlueNext, setIsBlueNext] = useState(true);

//   const handleClick = (index: number) => {
//     if (squares[index] || calculateWinner(squares)) return;

//     const newSquares = squares.slice();
//     newSquares[index] = isBlueNext ? "Blue" : "Red";
//     setSquares(newSquares);
//     setIsBlueNext(!isBlueNext);

//     const winner = calculateWinner(newSquares);
//     if (winner) {
//       const newScores = { ...scores };
//       newScores[winner.toLowerCase() as "blue" | "red"]++;
//       setScores(newScores);
//     }
//   };

//   const renderSquare = (index: number) => (
//     <Square value={squares[index]} onClick={() => handleClick(index)} />
//   );

//   const winner = calculateWinner(squares);
//   const status = winner
//     ? `Winner: ${winner}`
//     : `Next player: ${isBlueNext ? "Blue" : "Red"}`;

//   return (
//     <div>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="board-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="board-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//     </div>
//   );
// };

// const calculateWinner = (squares: Array<string | null>) => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }

//   return null;
// };

// export default Board;
// "use client";

// import React, { useState } from "react";
// // import Square from "./Square";
// import Square from "./Square";

// interface BoardProps {
//   scores: { blue: number; red: number };
//   setScores: (scores: { blue: number; red: number }) => void;
// }

// const Board: React.FC<BoardProps> = ({ scores, setScores }) => {
//   const [squares, setSquares] = useState<Array<string | null>>(
//     Array(9).fill(null)
//   );
//   const [isBlueNext, setIsBlueNext] = useState(true);

//   const handleClick = (index: number) => {
//     if (squares[index] || calculateWinner(squares)) return;

//     const newSquares = squares.slice();
//     newSquares[index] = isBlueNext ? "Blue" : "Red";
//     setSquares(newSquares);
//     setIsBlueNext(!isBlueNext);

//     const winner = calculateWinner(newSquares);
//     if (winner) {
//       const newScores = { ...scores };
//       newScores[winner.toLowerCase() as "blue" | "red"]++;
//       setScores(newScores);
//     }
//   };

//   const renderSquare = (index: number) => (
//     <Square value={squares[index]} onClick={() => handleClick(index)} />
//   );

//   const winner = calculateWinner(squares);
//   const status = winner
//     ? `Winner: ${winner}`
//     : `Next player: ${isBlueNext ? "Blue" : "Red"}`;

//   return (
//     <div>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="board-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="board-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//     </div>
//   );
// };

// const calculateWinner = (squares: Array<string | null>) => {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }

//   return null;
// };

// export default Board;

import React, { useState } from "react";
import Square from "./Square";

interface BoardProps {
  scores: { blue: number; red: number };
  setScores: (scores: { blue: number; red: number }) => void;
}

const Board: React.FC<BoardProps> = ({ scores, setScores }) => {
  const [squares, setSquares] = useState<Array<string | null>>(
    Array(9).fill(null)
  );
  const [isBlueNext, setIsBlueNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null); // Track winner or draw

  const handleClick = (index: number) => {
    if (squares[index] || winner) return; // If square is filled or game is won, do nothing

    const newSquares = squares.slice();
    newSquares[index] = isBlueNext ? "Blue" : "Red";
    setSquares(newSquares);
    setIsBlueNext(!isBlueNext);

    const calculatedWinner = calculateWinner(newSquares);
    if (calculatedWinner) {
      const newScores = { ...scores };
      newScores[calculatedWinner.toLowerCase() as "blue" | "red"]++;
      setScores(newScores);
      setWinner(calculatedWinner);
    } else if (isBoardFull(newSquares)) {
      // If board is full and no winner, it's a draw
      setWinner("Draw");
    }
  };

  const renderSquare = (index: number) => (
    <Square value={squares[index]} onClick={() => handleClick(index)} />
  );

  const status = winner
    ? winner === "Draw"
      ? "It's a draw!"
      : `Winner: ${winner}`
    : `Next player: ${isBlueNext ? "Blue" : "Red"}`;

  // Function to check if the board is full (no null values)
  const isBoardFull = (squares: Array<string | null>): boolean => {
    return squares.every((square) => square !== null);
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const calculateWinner = (squares: Array<string | null>) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default Board;
