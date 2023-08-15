let occupiedTiles = [];
let Naruto;
let Jiraya;
let Lee;
let score = 0;
let gameOver = false;

window.onload = function () {
  SetGame();
};

function SetGame() {
  // set up the grid for the game board.
  for (let i = 0; i < 9; i++) {
    // create a div element for each square on the board.
    let tile = document.createElement("div");
    tile.id = i.toString();

    //? add a event listener to the tile.
    tile.addEventListener("click", selectTile);

    document.getElementById("board").appendChild(tile);
  }
  setInterval(setNaruto, 1500); // set the mole every 1 second.
  setInterval(setJiraya, 1000); // set the mole every 2 second.
  setInterval(setlee, 1000); // set the mole every 3 second.
}

function getRandomTile() {
  let num;
  do {
    num = Math.floor(Math.random() * 9) + 1;
  } while (occupiedTiles.includes(num));
  occupiedTiles.push(num);
  return num;
}

function setNaruto() {
  if (gameOver) {
    return;
  }

  if (Naruto) {
    Naruto.innerHTML = "";
  }

  // set the mole on a random tile 🫠
  let mole = document.createElement("img");
  mole.src = "Naruto.png";

  let num = getRansomTile();
  //   if (Naruto && lee && jiraya.id == num) {
  //     return;
  //   }

  Naruto = document.getElementById(num);
  Naruto.appendChild(mole);
}

function setJiraya() {
  if (gameOver) {
    return;
  }
  if (Jiraya) {
    Jiraya.innerHTML = "";
  }

  let jiraya = document.createElement("img");
  jiraya.src = "Jiraya.png";

  let num = getRandomTile();
  Jiraya = document.getElementById(num);
  Jiraya.appendChild(jiraya);
}

function setLee() {
  if (gameOver) {
    return;
  }
  if (Lee) {
    Lee.innerHTML = "";
  }
  let lee = document.createElement("img");
  lee.src = "lee.png";

  let num = getRandomTile();
  Lee = document.getElementById(num);
  Lee.appendChild(lee);
}

function selectTile() {
  if (gameOver) {
    return;
  }
  if (this == Naruto) {
    score += 10;
    document.getElementById("score").innerHTML = "Score : " + score.toString();
  }
  if (this == Jiraya) {
    document.getElementById("score").innerHTML =
      "Game Over " + score.toString();
    document.getElementById("score").style.color = "red";
    document.getElementById("score").style.fontWeight = "bold";
    gameOver = true;
  }
}
