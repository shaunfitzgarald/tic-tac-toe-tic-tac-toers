import React from 'react'

const Square = ({squares, handleClick}) => {
  return (
    <>
      <div className="grid">
        {squares.map((index) => {
          return (
            <div 
            className="square" 
            key={index}
            onClick={() => handleClick(index)}
            >  
        </div>
        )
          })}
        </div>
    </>
  )
}
export default Square
