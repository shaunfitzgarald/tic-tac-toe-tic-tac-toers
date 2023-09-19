import React from "react"

const Square = ({value}) => {
  return (
<div className="board-row">
<App value={squares[0]} onSquareclick={() => handleClick(0)}/>
<App value={squares[1]} onSquareclick={() => handleClick(1)}/>
<App value={squares[2]} onSquareclick={() => handleClick(2)}/>
</div>
<div className="board-row">
<Square value={squares[3]} onSquareclick={() => handleClick(3)}/>
<Square value={squares[4]} onSquareclick={() => handleClick(4)}/>
<Square value={squares[5]} onSquareclick={() => handleClick(5)}/>
</div>
<div className="board-row">
<Square value={squares[6]} onSquareclick={() => handleClick(6)}/>
<Square value={squares[7]} onSquareclick={() => handleClick(7)}/>
<Square value={squares[8]} onSquareclick={() => handleClick(8)}/>
</div>
  )
}

export default Square
