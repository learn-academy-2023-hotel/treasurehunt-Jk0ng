import React from "react"

const Square = ({value, index}) => {

// const { value } = props is the same as props.value
// instead pass the destructured props in the paretheses 
  
  return (
    <>
      <div className="square">{value}</div>
    </>
  )
}
export default Square
