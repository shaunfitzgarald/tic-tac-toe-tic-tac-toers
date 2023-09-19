import React from 'react'

const Square = ({squares, handleClick}) => {
  console.log("string", squares)
return (
<>
<div className="grid">
{squares.map((value, index) => {
  console.log("value", index)
 return (
  <div 
  className="square" 
  key={index}
  onClick={() => handleClick(index)}
 >
  {value} 
 </div>
 )
 })}
  </div>
</>)
}
export default Square

