let turn = 'O';
let total_turn = 0;


let winner = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];         //cases to win the game(accodeing to cell's id).

let board_array = new Array(9).fill("E");  
//   0.  1.  2.  3.  4.  5.  6.  7.  8
// ["E","E","E","E","E","E","E","E","E"]


function checkWinner(){
   
    for(let [index0,index1,index2] of winner)
    {
        if(board_array[index0]!="E"&&board_array[index0]===board_array[index1]&&board_array[index1]===board_array[index2])
            return 1;
    }


    return 0;

}



// Print sahi se ho rha hai....

const printer = (event)=>{
   
    const element = event.target;
    // if board is empty
    if(board_array[element.id]==="E") // this condition prevents overriding of O/X if cell if already filled with O/X. You can only write O/X in empty cells.
   {
    total_turn++;
    if(turn==='O')
    {
        // code for image
        let x = document.getElementById("x");
        x.style.width = "500px";
        x.style.height = "500px";

        let o = document.getElementById("o");
        o.style.width = "250px";
        o.style.height = "250px";

        // logic code
        element.innerHTML = "O";
        board_array[element.id] = "O";
        if(checkWinner())
        {
            document.getElementById('winningMessage').innerHTML = "Winner is O";
            board.removeEventListener('click',printer);  //remove the event listener so that after O wins the game, no more cells can be filled with O/X.

            // code to reset image sizes
            let x = document.getElementById("x");
            x.style.width = "350px";
            x.style.height = "350px";

            let o = document.getElementById("o");
            o.style.width = "350px";
            o.style.height = "350px";

  
            return;
        }
        turn = "X";
    }
    else{
         // code for image
         let x = document.getElementById("x");
         x.style.width = "250px";
         x.style.height = "250px";
 
         let o = document.getElementById("o");
         o.style.width = "500px";
         o.style.height = "500px";
 
         // logic code
        element.innerHTML = "X";
        board_array[element.id] = "X";
        if(checkWinner())
        {
            document.getElementById('winningMessage').innerHTML = "Winner is X";
            board.removeEventListener('click',printer);  //remove the event listener so that after X wins the game, no more cells can be filled with O/X.

            // code to reset image sizes
            let x = document.getElementById("x");
            x.style.width = "350px";
            x.style.height = "350px";

            let o = document.getElementById("o");
            o.style.width = "350px";
            o.style.height = "350px";

            return;
        }
        turn = "O";
    }

    if(total_turn==9)
    {
        document.getElementById('winningMessage').innerHTML = "Match is Draw";
        board.removeEventListener('click',printer);   ////remove the event listener so that after the game is Draw, no more cells can be filled with O/X.

        // code to reset image sizes
        let x = document.getElementById("x");
        x.style.width = "350px";
        x.style.height = "350px";
    
        let o = document.getElementById("o");
        o.style.width = "350px";
        o.style.height = "350px";
    }

    }   
}




const board = document.querySelector('.board');
board.addEventListener('click',printer);  //adding event listener to run/start the game.



// code to restart the game.
const Restart = document.getElementById("restartButton");
Restart.addEventListener('click',()=>{
   const cell = document.getElementsByClassName('cell');

   Array.from(cell).forEach((value)=>{
     value.innerHTML = "";
   })


   turn = "O";
   total_turn = 0;
   board_array = new Array(9).fill("E");
   document.getElementById('winningMessage').innerHTML = "";
   board.addEventListener('click',printer); //add eventlistener to the board again after restarting the game so that game could start working again. We need to write addeventlistener again because we have earlier removed it when O/X wins the game or the match is Draw. 

    // code to reset image sizes
    let x = document.getElementById("x");
    x.style.width = "350px";
    x.style.height = "350px";

    let o = document.getElementById("o");
    o.style.width = "350px";
    o.style.height = "350px";

})


// Homework Project: Rock paper scissor