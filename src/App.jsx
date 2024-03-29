import React,{useState} from "react";
import "./App.css"

function App(){

    
    const [cell,setCell]=useState(Array(9).fill(null));
    const [isXTurn,setisXTurn]=useState(true);

  
    
    function handleClick(index){
        // console.log('index:',index);
       
        const newCells=[...cell];
        newCells[index]=isXTurn?"x":"o";
        setCell(newCells);
        // const checkWinner=winner();
        // console.log(checkWinner);
        // my question is even if i call the winner function inside this handle click function why it is returning undefined all the time?
        setisXTurn(!isXTurn)

        
    }

   

   
    const winningLogic=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ]

    function winner(){
    
        // winningLogic.forEach(logic=>{
            //     const [a,b,c]=logic;
            //     // console.log(a,b,c);
            //     if(cell[a]!==null && cell[a]===cell[b] && cell[b]===cell[c]){
                //         // console.log("winner");
                //         return true;
                //     }
                //     return false;
                // })
                for(let logic of winningLogic){
                    const[a,b,c]=logic;
                    if(cell[a]!==null && cell[a]===cell[b] && cell[b]===cell[c]){
                        return cell[a];
                    }
                    // if(cell[a]!==null && cell[a]!==cell[b]&& cell[b]!==cell[c]){
                    //     return "Draw"
                    // }
                }

                return false;
            }
            
    // console.log(winner)
    const isWinner=winner();
    // console.log(isWinner);


//   console.log(cell.length);

    function everyElementHave(cellElement){
        return cellElement!==null;
    }
    // check for draw
   function checkDraw(){
    if(isWinner===false && cell.every(everyElementHave)){
        return "Match Draw: Play Again "
    }
   }

//    console.log(checkDraw());
const ifDraw=checkDraw();
    // handleReset

    function handleReset(){
        setCell(Array(9).fill(null));
    }

    return <div className="game-container">
    {/* header */}
    <header><h1>Tic Tac Toe</h1></header>


    {/* game-board */}
    {isWinner? <div className="winner-container">
    <h1>{isWinner} Won 🥳!!!</h1>
    <button onClick={handleReset}>Play Again</button>
    </div> : 
    <div className="game-board">
        <div className="game-board-row game-board-row-1">

            <div onClick={()=>handleClick(0)} className="cell cell-1">{cell[0]}</div>
            <div onClick={()=>handleClick(1)}  className="cell cell-2">{cell[1]}</div>
            <div onClick={()=>handleClick(2)}  className="cell cell-3">{cell[2]}</div>

        </div>
        <div className="game-board-row game-board-row-1">

            <div onClick={()=>handleClick(3)}  className="cell cell-4">{cell[3]}</div>
            <div onClick={()=>handleClick(4)}  className="cell cell-5">{cell[4]}</div>
            <div onClick={()=>handleClick(5)}  className="cell cell-6">{cell[5]}</div>

        </div>
        <div className="game-board-row game-board-row-1">

            <div onClick={()=>handleClick(6)}  className="cell cell-7">{cell[6]}</div>
            <div onClick={()=>handleClick(7)}  className="cell cell-8">{cell[7]}</div>
            <div onClick={()=>handleClick(8)}  className="cell cell-9">{cell[8]}</div>

        </div>

        <div className="draw-screen"><h1>{ifDraw}</h1></div>
        <button onClick={handleReset}>Play Again</button>
    </div>
    }
   
        <footer><h4>ravipratihast &#169; 2022</h4></footer>

    </div>
   
  
}

export default App;