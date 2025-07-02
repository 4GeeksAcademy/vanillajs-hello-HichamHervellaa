window.onload = () => {
  const suits = ["♦", "♥", "♠", "♣"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];

  const topSuit = document.getElementById("top-suit");
  const bottomSuit = document.getElementById("bottom-suit");
  const valueElement = document.getElementById("value");

  topSuit.innerText = suit;
  bottomSuit.innerText = suit;
  valueElement.innerText = value;

  const isRed = suit === "♥" || suit === "♦";
  const color = isRed ? "red" : "black";

  topSuit.style.color = color;
  bottomSuit.style.color = color;
  valueElement.style.color = color;
};