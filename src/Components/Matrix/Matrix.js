import React, { useEffect, useMemo, useState } from "react";
import "./Matrix.css";
import Square from "../Square/Square";

function Matrix() {
  const [matrix, setmatrix] = useState([]);
  const [stepClickCount, setStepClickCount] = useState(0);
  const [bubble1, setBubble1] = useState(undefined);
  const [bubble2, setBubble2] = useState(undefined);
  const [call, setCall] = useState(false);

  const matrixCombination = () => {
    const bgcolor = ["red", "green", "yellow", "pink", "gray"];
    const randBg = [];

    for (let i = 0; i < 64; i++) {
      randBg[i] = Math.floor(Math.random() * 5);
    }

    const squareStyle = [];
    for (let i = 0; i < 8; i++) {
      squareStyle[i] = new Array();
      for (let j = 0; j < 8; j++) {
        squareStyle[i][j] = {
          col: i,
          row: j,
          style: bgcolor[randBg[i + 8 * j]],
        };
      }
    }

    setmatrix(squareStyle);
    console.log(squareStyle);
  };

  const bublleClick = (event) => {
    if (stepClickCount % 2 === 0) {
      console.log(event);
      setBubble1(event);
    } else {
      console.log(event);
      setBubble2(event);
    }
    setStepClickCount(stepClickCount + 1);
    console.log(stepClickCount);
  };

  const moveSquares = () => {
    const newMatrix = matrix.map((row) => {
      return row.map((item) => {
        if (item.col === bubble1.col && item.row === bubble1.col) {
          return { ...item, style: bubble2.style };
        }
        if (item.col === bubble2.col && item.row === bubble2.row) {
          return { ...item, style: "re" };
        }
        return item;
      });
    });
    setmatrix(newMatrix);
  };

  const renderMatrix = (matrix) => {
    return (
      <div className="matrix">
        {matrix.map((item, index) => {
          return (
            <div key={index} className="column">
              {item.map((child, index) => {
                return (
                  <Square
                    key={index}
                    squareInfo={child}
                    onClick={() => bublleClick(child)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    matrixCombination();
  }, []);

  useEffect(() => {
    console.log(bubble1, bubble2);
    moveSquares();
    console.log(stepClickCount);
  }, [bubble1, bubble2]);

  return <>{renderMatrix(matrix)}</>;
}

export default Matrix;
