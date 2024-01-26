import React from "react"

const Square = ({ value, index, handleSquareClick }) => {

  // const { value } = props; is the same as props.value
  // instead pass the destructured props in the paretheses 
  const handleClick = () => {
    handleSquareClick(index)
  }

  return (
    <>
      <div className="square" onClick={handleClick}>{value}</div>
    </>
  )
}
export default Square
