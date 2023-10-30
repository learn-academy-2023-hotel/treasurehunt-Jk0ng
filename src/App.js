import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"
import { click } from "@testing-library/user-event/dist/click"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

  const handleSquareClick = (clickedSquareIndex) => {
    // variable holding copy of current state
    let updatedBoard = [...board]
    // use index to update the current square's value with emoji using bracket notation 
    updatedBoard[clickedSquareIndex] = "🎄"
    //update sate with the nes board
    setBoard(updatedBoard)  
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className = "board">
      { board.map((value, index) => {
        return( 
        <Square 
          value={value} 
          index={index} 
          handleSquareClick = {handleSquareClick}
        />
        )
      })}
      </div>
    </>
  )
}

export default App
