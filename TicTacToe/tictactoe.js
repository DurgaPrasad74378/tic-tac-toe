let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset");
let playAgainBtn= document.querySelector("#play-again");
let msgContainer= document.querySelector(".msg-winner");
let msg= document.querySelector("#winner");

let turn0=true;
const winStates=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerHTML="O";
            turn0=false;
        } else{
            box.innerHTML="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const resetGame=()=>{
    boxes.forEach((box)=>{
        box.innerHTML="";
        box.disabled=false;
    });
    msgContainer.style.display="none";
}

const showWinner=(winner)=>{
    msg.innerHTML="Congrats to player: "+winner;
    msgContainer.style.display="block";
    boxes.forEach((box)=>{
        box.disabled=true;
    });
}
const checkWinner=()=>{
    for(let pattern of winStates){
        let val1=boxes[pattern[0]].innerHTML;
        let val2=boxes[pattern[1]].innerHTML;
        let val3=boxes[pattern[2]].innerHTML;
        
        if(val1!="" && val2!="" && val3!=""){
            if(val1==val2 && val2==val3){
                showWinner(val1);
            }
        }
    }
}
resetBtn.addEventListener("click",resetGame);
playAgainBtn.addEventListener("click",resetGame);