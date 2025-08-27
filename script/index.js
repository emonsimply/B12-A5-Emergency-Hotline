let heartCount = Number(document.getElementById("heart-count").innerText);
let coinCount = Number(document.getElementById("coin-count").innerText);
let copyCount = Number(document.getElementById("copy-count").innerText);

const cards = document.getElementsByClassName("card");
const historyCard = document.getElementById("history-card");
const clearBtn = document.getElementById("clear-btn");

for (let card of cards) {
  // Heart Count
  const heartBtn = card.childNodes[1].childNodes[3];
  heartBtn.addEventListener("click", function () {
    heartCount++;
    document.getElementById("heart-count").innerText = heartCount;
  });

  // Call Button
  const title = card.childNodes[5].innerText;
  const number = card.childNodes[9].innerText;
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const callBtn = card.childNodes[15].childNodes[3];
  callBtn.addEventListener("click", function () {
    if (coinCount < 20) {
      alert("❌Not enough coins to make a call!");
      return;
    }

    alert(`📞 Calling ${title} ${number}`);

    coinCount = coinCount - 20;
    document.getElementById("coin-count").innerText = coinCount;

    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
    <div class="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-2">
            <div>
              <h3 class="font-semibold text-sm">${title}</h3>
              <p class="text-gray-500">${number}</p>
            </div>
            <div class="text-sm">${time}</div>
          </div>
    `;
    historyCard.appendChild(newHistory);
  });

  const copyBtn = card.childNodes[15].childNodes[1];
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(number);
    alert("Copied: " + number);
    copyCount++;
    document.getElementById("copy-count").innerText = copyCount;
  });
}

// clear button
clearBtn.addEventListener("click", function () {
  historyCard.innerHTML = "";
});
