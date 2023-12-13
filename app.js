let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let winner;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const checkWin = () => {
    for(let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                winner = pos1;
                showWinner();
            }
        }
    }
};

const disableBoxes = () => {
    for(box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = () => {
    msg.innerText = `Congrats! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            box.classList.add("o");
            box.classList.remove("x");
            turnO = false;
        } else {
            box.innerText = "X";
            box.classList.add("x");
            box.classList.remove("o");
            turnO = true;
        }
        box.disabled = true;
        checkWin();
    });
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);