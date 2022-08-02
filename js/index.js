function changeDice() {
  let dice = rollDice();
  document
    .querySelector(".img1")
    .setAttribute("src", `images/dice${dice.dice1}.png`);

  document
    .querySelector(".img2")
    .setAttribute("src", `images/dice${dice.dice2}.png`);

  let winner =
    dice.dice1 > dice.dice2
      ? "Player 1 wins !!!"
      : dice.dice1 < dice.dice2
      ? "Player 2 wins !!!"
      : "Tie !!!";
  setWinner(winner);

  return;
}

function reset() {
  document.querySelector(".img1").setAttribute("src", `images/dice6.png`);
  document.querySelector(".img2").setAttribute("src", `images/dice6.png`);
  document.querySelector("h1").textContent = "Dicee";

  return;
}

function setWinner(winner) {
  document.querySelector("h1").textContent = winner;
}

function rollDice() {
  const roll = () => {
    return Math.floor(Math.random() * 6 + 1);
  };
  const dice1 = roll();
  const dice2 = roll();
  return { dice1, dice2 };
}
