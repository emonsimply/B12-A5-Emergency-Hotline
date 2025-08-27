let heartCount = Number(document.getElementById("heart-count").innerText);
let coinCount = Number(document.getElementById("coin-count").innerText);
let copyCount = Number(document.getElementById("copy-count").innerText);

const cards = document.getElementsByClassName("card");

// Heart Count
for (let card of cards) {
  const heartBtn = card.childNodes[1].childNodes[3];
  heartBtn.addEventListener("click", function () {
    heartCount++;
    document.getElementById("heart-count").innerText = heartCount;
  });
}
