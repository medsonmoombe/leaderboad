import './style.css';
import { showData } from '../modules/showScore.js';
import displayScores from '../modules/scores.js';

const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('#submit-btn');
const player = document.getElementById('name');
const score = document.getElementById('score');

window.addEventListener('DOMContentLoaded', () => {
  displayScores();

  refreshBtn.addEventListener('click', () => {
    displayScores();
  });

  submitBtn.addEventListener('click', () => {
    if (player.value.length === 0) {
      return;
    }

    //   if (!score.value.match(regex2)) {
    //     errorMessage.style.display = "block";
    //     errorMessage.style.color = "yellow";
    //     errorMessage.style.fontSize = "12px";
    //     errorMessage.style.lineHeight = "24px";
    //     return;
    //   }
    //   errorMessage.style.display = "none";

    showData(player.value, score.value);
    player.value = '';
    score.value = '';
  });
});
