import React, { useContext } from "react";
import { AppContext } from "../components/InsertData";

const Number = ({ numberPos, attempVal, final }) => {
  const { board, setBoard, boardF, setBoardF } = useContext(AppContext);
  let number;
  if (final) {
    number = boardF[attempVal * 3 + numberPos];
  } else number = board[attempVal * 3 + numberPos];
  const changeValue = (event) => {
    if (final) {
      if (event.target.value < 0 || event.target.value > 8) return;
      if (boardF.includes(event.target.value)) return;
      if (boardF[attempVal * 3 + numberPos]) return;
      const newBoard = [...boardF];
      newBoard[attempVal * 3 + numberPos] = event.target.value;
      setBoardF(newBoard);
    } else {
      if (event.target.value < 0 || event.target.value > 8) return;
      if (board.includes(event.target.value)) return;
      if (board[attempVal * 3 + numberPos]) return;
      const newBoard = [...board];
      newBoard[attempVal * 3 + numberPos] = event.target.value;
      setBoard(newBoard);
    }
  };
  const deleteNumber = (event) => {
    if (final){
      if (event.key === "Backspace") {
        const newBoard = [...boardF];
        newBoard[attempVal * 3 + numberPos] = "";
        setBoardF(newBoard);
      } }
    else 
    if (event.key === "Backspace") {
        const newBoard = [...board];
        newBoard[attempVal * 3 + numberPos] = "";
        setBoard(newBoard);
      }
  };
  return (
    <input
      type="number"
      className="number"
      onChange={changeValue}
      onKeyDown={deleteNumber}
      value={number}
    />
  );
};

export default Number;
