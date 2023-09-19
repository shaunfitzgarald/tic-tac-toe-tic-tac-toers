import React, {useState} from 'react'

const Square = () => {
  const [value, setValue] = useState(null)
  const handleClick = () => {
    setValue("❌")

  }
  return (
    <>
        <button className="square"
        onClick={onSquareClick}
        >{value}</button>
    </>
  )
}

export default Square
