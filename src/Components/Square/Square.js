import React from "react";
import "./Square.css";
function Square({ squareInfo, onClick }) {
  return (
    <div
      className="square"
      style={{ backgroundColor: squareInfo.style }}
      onClick={onClick}
      // onClick={() => console.log(squareInfo.col, squareInfo.row)}
    ></div>
  );
}

export default Square;
