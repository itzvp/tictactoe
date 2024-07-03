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

const Square: React.FC<SquareProps> = ({ value, onClick }) => (
  <button
    className="square"
    onClick={onClick}
    style={{ background: value === "Blue" ? "blue" : "red", color: "white" }}
  >
    {value}
  </button>
);

export default Square;
