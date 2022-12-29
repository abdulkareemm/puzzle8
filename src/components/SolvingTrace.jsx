import React from 'react'
import BoardS from './BoardS';

const SolvingTrace = ({data,Back}) => {
    data = data["solution"];
  return (
    <div>
      <nav>
        <h1 className='headerS'>Solve </h1>
      </nav>
      <div className="solve-boards">
        {data.map((solving, ibx) => (
          <BoardS solve={solving} key={ibx} num={ibx} />
        ))}
      </div>
      <div className='back-div'>
        <button className='back-btn' onClick={Back}>Back</button>
      </div>
    </div>
  );
}

export default SolvingTrace