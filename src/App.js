import {  useState } from "react";
import { sendData } from "./api/Api";
import "./App.css";

import InsertData from "./components/InsertData";
import SolvingTrace from "./components/SolvingTrace";

const BOARDDEFULT = ["", "", "", "", "", "", "", "", ""];
function App() {
  const [board, setBoard] = useState(BOARDDEFULT);
  const [boardF, setBoardF] = useState(BOARDDEFULT);
  const [boardS,setBoardS] = useState([])
  const [error, setError] = useState("");
  const [solve, setSolve] = useState(false);
  let cond = false;

  const clickHandler = async () => {
    cond = board.includes("");
    if (cond) {
      setError("Initial Board must be completed");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    cond = boardF.includes("");
    if (cond) {
      setError("Final Board must be completed");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    console.log("solve>>>>>>>>>")
    const data = await sendData(board, boardF);
    setSolve(true)
    setBoardS(data)
  };
  const clickBack = ()=>{
    setSolve(false)
    setBoardS([])
    setBoard(BOARDDEFULT)
    setBoardF(BOARDDEFULT)
  }
  return (
    <div className="App">
      {error && (
        <div className="error">
          <h1>{error}</h1>
        </div>
      )}
      {solve?(<SolvingTrace data={boardS}  Back={clickBack}/>):(<InsertData
        board={board}
        setBoard={setBoard}
        boardF={boardF}
        setBoardF={setBoardF}
        clickHandler={clickHandler}
        error={error}
      />)}
    </div>
  );
}

export default App;
