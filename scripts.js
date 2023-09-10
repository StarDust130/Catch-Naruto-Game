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
  setInterval(setNaruto, 1000); // set the mole every 1 second.
  setInterval(setJiraya, 2000); // set the mole every 2 second.
  setInterval(setlee, 3000); // set the mole every 3 second.
}

function getRansomTile() {
  // get a random number between 0 and 8👱‍♀️
  let num = Math.floor(Math.random() * 9);
  return num.toString();
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

  //! if the mole is on the same tile as the other mole, then don't set it.(not working)
  if (Naruto && Lee && Jiraya.id == num) {
    mole.getElementById.style.display = "none";
  }

  Naruto = document.getElementById(num);
  Naruto.appendChild(mole);
}

function setJiraya() {
  if (gameOver) {
    return;
  }
  // set the mole on a random tile 🫠
  if (Jiraya) {
    Jiraya.innerHTML = "";
  }

  let jiraya = document.createElement("img");
  jiraya.src = "Jiraya.png";

  let num = getRansomTile();

  //! if the mole is on the same tile as the other mole, then don't set it.(not working)
  if (Naruto && Lee && Jiraya.id == num) {
    jiraya.getElementById.style.display = "none";
  }

  Jiraya = document.getElementById(num);
  Jiraya.appendChild(jiraya);
}

function setlee() {
  if (gameOver) {
    return;
  }
  if (Lee) {
    Lee.innerHTML = "";
  }
  let lee = document.createElement("img");
  lee.src = "lee.png";

  let num = getRansomTile();

  //! if the mole is on the same tile as the other mole, then don't set it.(not working)
  if (Naruto && Lee && Jiraya.id == num) {
    lee.getElementById.style.display = "none";
  }

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
  } else if (this == Jiraya) {
    document.getElementById("score").innerHTML =
      "Game Over " + score.toString();
    document.getElementById("score").style.color = "red";
    document.getElementById("score").style.fontWeight = "bold";
    gameOver = true;
  } else if (this == Lee) {
    document.getElementById("score").innerHTML =
      "Game Over " + score.toString();
    document.getElementById("score").style.color = "red";
    document.getElementById("score").style.fontWeight = "bold";
    gameOver = true;
  }
}
// Get a reference to the audio element
const audio = document.getElementById("background-music");

// Play the audio
function playAudio() {
  audio.play();
}

// Pause the audio
function pauseAudio() {
  audio.pause();
}

// Adjust the volume (0.0 to 1.0)
function setVolume(volume) {
  audio.volume = volume;
}
