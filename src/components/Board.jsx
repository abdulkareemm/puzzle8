import Number from "./Number";

const Board = ({ final }) => {
  return (
    <div className="board">
      <div className="row">
        <Number numberPos={0} attempVal={0} final={final} />
        <Number numberPos={1} attempVal={0} final={final} />
        <Number numberPos={2} attempVal={0} final={final} />
      </div>
      <div className="row">
        <Number numberPos={0} attempVal={1} final={final} />
        <Number numberPos={1} attempVal={1} final={final} />
        <Number numberPos={2} attempVal={1} final={final} />
      </div>
      <div className="row">
        <Number numberPos={0} attempVal={2} final={final} />
        <Number numberPos={1} attempVal={2} final={final} />
        <Number numberPos={2} attempVal={2} final={final} />
      </div>
    </div>
  );
};

export default Board;
