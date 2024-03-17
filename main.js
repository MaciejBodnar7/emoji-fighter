let fighters = ['🐉', '🐥', '🐊', '💩', '🦍', '🐢', '🐩', '🦭', '🦀', '🐝', '🤖', '🐘', '🐸', '🕷', '🐆', '🦕', '🦁'];

let stageEl = document.getElementById('stage');
let fightButton = document.getElementById('fightButton');

fightButton.addEventListener('click', function () {
  function genRandom() {
    let random = Math.floor(Math.random() * fighters.length); // using math random in arrays with their lenght
    return random;
  }
  stageEl.textContent = fighters[genRandom()] + ' vs ' + fighters[genRandom()];
});
