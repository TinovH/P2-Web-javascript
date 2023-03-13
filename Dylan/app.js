let text = document.getElementById("text")
let restart = document.getElementById("restart")
let btnoption = document.querySelectorAll("#button-option");
let msgRef = document.getElementById("msgRef");

///ToLetTheMusicWork///
let muziek = document.getElementById("muziek");



muziek.addEventListener("click", function(){
  let audio = new Audio("./muziek/music.mp3")
  audio.play()
});

///ToStartAsPlayerX///
let xTurn = true;
let count = 0;

//PatternOfAllPossibleWins//
let winningPattern = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];

//xPlaysFirst//
let currentplayer = "x"


//DisableAllButtons//
const disableButtons = () => {
  btnoption.forEach((element) => (element.disabled = true));
};

//EnableAllButtonsForRestart//
const enableButtons = () => {
  btnoption.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
};

//IfAPersonWins//
const winFunction = (letter) => {
  disableButtons();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};

//FunctionforDraw//
const drawFunction = () => {
  disableButtons();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

//Restart//
restart.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

//CheckForWin//
const winChecker = () => {
for (let i of winningPattern) {
  let [element1, element2, element3] = [
    btnoption[i[0]].innerText,
    btnoption[i[1]].innerText,
    btnoption[i[2]].innerText,
];

//CheckIfElementsAreFilled//
if (element1 != "" && (element2 != "") & (element3 != "")) {
  if (element1 == element2 && element2 == element3) {

//CheckedAndWin//
  winFunction(element1);
}}}};

//Display X/O on click//
btnoption.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;

      //Display X
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;

      //Display Y
      element.innerText = "O";
      element.disabled = true;
    }


//CountForEveryClick//
count += 1;
  if (count == 9) {
  drawFunction();
}

//CheckForWin//
  winChecker();
});
});

// startgame()


