import React, {useState} from "react";

type onSquareClick = (event: React.MouseEvent<HTMLButtonElement>) => void;

interface SquareProps {
  value: string | null,
  onClick: onSquareClick
}

function Square ({value, onClick}:SquareProps) {
  return (
    <button 
      className="square"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;