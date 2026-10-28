
function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}

function filterGames(category, button) {
  document.querySelectorAll(".categories button")
    .forEach(btn => btn.classList.remove("active"));

  button.classList.add("active");

  document.querySelectorAll(".game-card").forEach(card => {
    card.style.display =
      category === "all" ||
      card.dataset.category === category
      ? "block" : "none";
  });
}

function searchGames() {
  const query = document.getElementById("searchInput")
    .value.toLowerCase();

  document.querySelectorAll(".game-card").forEach(card => {
    card.style.display =
      card.innerText.toLowerCase().includes(query)
      ? "block" : "none";
  });
}

function showGame(title, html) {
  document.getElementById("gameTitle").innerText = title;
  document.getElementById("gameContent").innerHTML = html;
  document.getElementById("gameArea").hidden = false;
  document.getElementById("gameArea")
    .scrollIntoView({ behavior: "smooth" });
}

function closeGame() {
  document.getElementById("gameArea").hidden = true;
}

function launchGame(game) {

  if (game === "rocket") {
    showGame("🚀 Rocket Challenge", `
      <h1 id="rocketScore">1.00x</h1>
      <p id="rocketStatus">Ready to launch!</p>
      <button onclick="startRocket()">LAUNCH ROCKET</button>
    `);
  }

  else if (game === "puzzle") {
    showGame("🧩 Number Puzzle", `
      <h3>Guess a number from 1 to 10</h3>
      <input id="guess" type="number" min="1" max="10">
      <button onclick="checkGuess()">CHECK</button>
      <p id="guessResult"></p>
    `);
  }

  else if (game === "snake") {
    showGame("🐍 Snake Game", `
      <p>Snake mini-game coming soon!</p>
    `);
  }

  else if (game === "target") {
    showGame("🎯 Target Shooter", `
      <p>Tap the target!</p>
      <h2 id="targetScore">Score: 0</h2>
      <button onclick="hitTarget()">🎯 HIT TARGET</button>
    `);
  }

  else if (game === "memory") {
    showGame("🧠 Memory Match", `
      <p>Remember this number:</p>
      <h1 id="memoryNumber">7284</h1>
      <button onclick="hideMemory()">START</button>
      <input id="memoryAnswer" placeholder="Enter number">
      <button onclick="checkMemory()">CHECK</button>
      <p id="memoryResult"></p>
    `);
  }

  else if (game === "racing") {
    showGame("🏎️ Speed Racing", `
      <h2 id="raceScore">0</h2>
      <button onclick="race()">SPEED UP 🏎️</button>
    `);
  }
}

let rocketTimer;
function startRocket() {
  clearInterval(rocketTimer);

  let score = 1;
  document.getElementById("rocketStatus").innerText =
    "Rocket flying!";

  rocketTimer = setInterval(() => {
    score += 0.1;

    document.getElementById("rocketScore").innerText =
      score.toFixed(2) + "x";

    if (score >= 5) {
      clearInterval(rocketTimer);
      document.getElementById("rocketStatus").innerText =
        "💥 CRASHED! Try again.";
    }
  }, 300);
}

function checkGuess() {
  const answer = Math.floor(Math.random() * 10) + 1;
  const guess = Number(document.getElementById("guess").value);

  document.getElementById("guessResult").innerText =
    guess === answer
      ? "🎉 Correct! You won!"
      : "The number was " + answer + ". Try again!";
}

let targetPoints = 0;
function hitTarget() {
  targetPoints++;
  document.getElementById("targetScore").innerText =
    "Score: " + targetPoints;
}

function hideMemory() {
  const number = document.getElementById("memoryNumber");
  number.style.visibility = "hidden";
  setTimeout(() => number.style.visibility = "visible", 2000);
}

function checkMemory() {
  const answer = document.getElementById("memoryAnswer").value;
  document.getElementById("memoryResult").innerText =
    answer === "7284" ? "🎉 Excellent!" : "Try again!";
}

let racePoints = 0;
function race() {
  racePoints += Math.floor(Math.random() * 10) + 1;
  document.getElementById("raceScore").innerText =
    "Distance: " + racePoints;
                            }
