import React, { useState } from 'react'
// import Square from './components/Square'
import './App.css'


const App = ( {value, onSquareClick} ) => {
  const [squares, setSquares] = useState(Array(9).fill(null))

    const handleClick = (i) => {
      const nextSquares = squares.slice()
      nextSquares[i] = "❌"
      setSquares(nextSquares)
    }
    return (
    <>
      <h1>Tic Tac Toe</h1>
      {/* <div className="grid">{grid}</div> */}
          <button className="square" onClick={onSquareClick}>
            {value}
          </button>
    </>
  )
    }
export default App