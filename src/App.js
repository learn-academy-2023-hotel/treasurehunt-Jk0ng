import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"
import PlayAgain from "./components/PlayAgain"
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

  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))

  // console.log(treasureLocation)

  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

  // console.log(bombLocation)

  const startOver = () => {
    setBoard([
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"
    ]);
    setBombLocation(Math.floor(Math.random() * board.length))
    setTreasureLocation(Math.floor(Math.random() * board.length))
  }

  const handleSquareClick = (clickedSquareIndex) => {
    // console.log(clickedSquareIndex)
    // variable holding copy of current state
    let updatedBoard = [...board]
    // console.log(updatedBoard)
    //set condition for if treasure location is same as clicked square's index
    if (clickedSquareIndex === treasureLocation) {
      //then reassign state value at that index to treasure emoji
      updatedBoard[clickedSquareIndex] = "💎"
      setBoard(updatedBoard)
      alert('Nice!You just found the treasure')
    }
    else if (clickedSquareIndex === bombLocation) {
      updatedBoard[clickedSquareIndex] = "💣"
      setBoard(updatedBoard)
    }
    else {
      // use index to update the current square's value with emoji using bracket notation 
      updatedBoard[clickedSquareIndex] = "🎄"
      //update state with the nes board
      setBoard(updatedBoard)
    };
  }


  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {board.map((value, index) => {
          return (
            <Square
              value={value}
              index={index}
              key={index}
              handleSquareClick={handleSquareClick}
            />
          )
        })}
      </div>
      < PlayAgain
        reset={startOver} />
    </>
  )
}

export default App
