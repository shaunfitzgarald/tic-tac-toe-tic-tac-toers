import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  
    // const handleClick = (selectedIndex) => {
    // let userClick = squares.map((index) => 
    // index + 1
    const handleClick = (selectedIndex) => {
      if(squares[selectedIndex] === null) {
        squares[selectedIndex]="❌"
        setSquares([...squares])
      }
    }
    // )
    // if (userClick % 2 === 0) {
    //   squares[selectedIndex]="❌"
    //   setSquares([...squares])
    // }
    // else {
    //   squares[selectedIndex]="⭕️"
    //   setSquares([...squares])
    // }
    // }
    
    return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square squares={squares} handleClick={handleClick}/>
    </>
  )
}

export default App