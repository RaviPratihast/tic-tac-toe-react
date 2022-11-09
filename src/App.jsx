import React from "react";
import "./App.css"

function App(){
    return <div className="game-container">
    {/* header */}
    <header><h1>Tic Tac Toe</h1></header>


    {/* game-board */}
    <div className="game-board">
        <div className="game-board-row game-board-row-1">

            <div className="cell cell-1">x</div>
            <div className="cell cell-2">x</div>
            <div className="cell cell-3">x</div>

        </div>
        <div className="game-board-row game-board-row-1">

            <div className="cell cell-4">x</div>
            <div className="cell cell-5">x</div>
            <div className="cell cell-6">x</div>

        </div>
        <div className="game-board-row game-board-row-1">

            <div className="cell cell-7">x</div>
            <div className="cell cell-8">x</div>
            <div className="cell cell-9">x</div>

        </div>
        
    </div>

    {/* footer */}
    </div>
}

export default App;