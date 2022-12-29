import React from "react";

const BoardS = ({ solve, num }) => {
  return (
    <div className="solve-board">
      {num === 0 ? (
        <div className="num-solve">
          <h1>Start Board</h1>
        </div>
      ) : (
        <div className="num-solve">
          <h1>Move {num}</h1>
        </div>
      )}

      <div className="board-s">
        <div className="row">
          <span className="numberS">{solve[0]}</span>
          <span className="numberS">{solve[1]}</span>
          <span className="numberS">{solve[2]}</span>
        </div>
        <div className="row">
          <span className="numberS">{solve[3]}</span>
          <span className="numberS">{solve[4]}</span>
          <span className="numberS">{solve[5]}</span>
        </div>
        <div className="row">
          <span className="numberS">{solve[6]}</span>
          <span className="numberS">{solve[7]}</span>
          <span className="numberS">{solve[8]}</span>
        </div>
      </div>
    </div>
  );
};

export default BoardS;
