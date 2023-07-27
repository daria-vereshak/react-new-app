import React from "react";

interface SquareProps {
  id: number
}

function Square (props: SquareProps) {
  return (
    <button className="square">{props.id}</button>
  )
}

export default Square;