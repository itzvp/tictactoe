// import React from "react";

// interface SquareProps {
//   value: string | null;
//   onClick: () => void;
// }

// const Square: React.FC<SquareProps> = ({ value, onClick }) => (
//   <button
//     className="square"
//     onClick={onClick}
//     style={{ background: value === "Blue" ? "blue" : "red", color: "white" }}
//   >
//     {value}
//   </button>
// );

// export default Square;
import React from "react";

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  let squareStyle: React.CSSProperties = {};

  // Set background color based on player's color
  if (value === "Blue") {
    squareStyle.backgroundColor = "blue";
  } else if (value === "Red") {
    squareStyle.backgroundColor = "red";
  }

  return (
    <button className="square" onClick={onClick} style={squareStyle}>
      {value}
    </button>
  );
};

export default Square;
