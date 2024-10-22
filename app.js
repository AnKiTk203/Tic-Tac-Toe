
let cnt = 0;

let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset-btn");

let newGameBtn = document.querySelector("#new-btn");

let msgContainer = document.querySelector(".msg-container");

let msg = document.querySelector("#msg");

let turnO = true;//playerX, playerY

const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]
]; 

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("Box was clicked");
        if(turnO){
        box.innerText = 'O';
        }
        else box.innerText = 'X';

        turnO = !turnO;
        box.disabled = true;

        cnt++;
        let res = checkWinner();
        if(!res && cnt == 9){
            cnt = 0;
            msg.innerText = "Game drawn!";
            disableBoxes();
            msgContainer.classList.remove("hide");
        }
    });
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = ()=>{
    turnO = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    disableBoxes();
    msgContainer.classList.remove("hide");
};

const checkWinner = () => {

    for(let pattern of winPatterns){

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos1 == pos2 && pos1 == pos3){
            showWinner(pos1);
            return true;
        }
    }
    return false;
};

const resetGame = ()=>{
    cnt = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
//resetBtn = 





