const upvoteBtn = document.getElementById("upvote");
const downvoteBtn = document.getElementById("downvote");
const scoreDisplay = document.getElementById("score");
let score = 0;

upvoteBtn.addEventListener("click", () => {
  score++;
  updateScore();
});

downvoteBtn.addEventListener("click", () => {
  score--;
  updateScore();
});

function updateScore() {
  scoreDisplay.textContent = "Current score: " + score;
}
