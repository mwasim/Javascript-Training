// Constants
const price = 3.26;
const cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];
const DENOMINATIONS = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

// DOM elements
const displayChangeDue = document.getElementById("change-due");
const cashInput = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const priceScreen = document.getElementById("price-screen");
const cashDrawerDisplay = document.getElementById("cash-drawer-display");

// Utility functions
const formatResults = (status, change) => {
  displayChangeDue.innerHTML = `<p>Status: ${status}</p>`;
  change.forEach((money) => {
    displayChangeDue.innerHTML += `<p>${money[0]}: $${money[1]}</p>`;
  });
};

const updateCashDrawer = (change) => {
  change.forEach(([denomination, amount]) => {
    const targetArr = cid.find(([name]) => name === denomination);
    targetArr[1] = parseFloat((targetArr[1] - amount).toFixed(2));
  });
};

const updateUI = (change = []) => {
  const currencyNameMap = {
    PENNY: "Pennies",
    NICKEL: "Nickels",
    DIME: "Dimes",
    QUARTER: "Quarters",
    ONE: "Ones",
    FIVE: "Fives",
    TEN: "Tens",
    TWENTY: "Twenties",
    "ONE HUNDRED": "Hundreds",
  };

  cashInput.value = "";
  priceScreen.textContent = `Total: $${price}`;
  cashDrawerDisplay.innerHTML = `<p><strong>Change in drawer:</strong></p>
    ${cid
      .map(([money, amount]) => `<p>${currencyNameMap[money]}: $${amount}</p>`)
      .join("")}
  `;

  updateCashDrawer(change);
};

const checkCashRegister = () => {
  const cashProvided = parseFloat(cashInput.value);
  if (cashProvided < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cashProvided === price) {
    displayChangeDue.innerHTML =
      "<p>No change due - customer paid with exact cash</p>";
    cashInput.value = "";
    return;
  }

  const changeDue = cashProvided - price;
  const cidReverse = cid.reverse();
  const totalCashInDrawer = cidReverse.reduce(
    (total, [, amount]) => total + amount,
    0
  );

  if (totalCashInDrawer < changeDue) {
    formatResults("INSUFFICIENT_FUNDS", []);
    return;
  }

  let remainingChange = changeDue;
  const change = [];

  for (let i = 0; i < DENOMINATIONS.length; i++) {
    const denomination = DENOMINATIONS[i];
    const [currencyName, currencyAmount] = cidReverse[i];
    const count = Math.floor(remainingChange / denomination);
    const amountToGive = Math.min(count * denomination, currencyAmount);

    if (amountToGive > 0) {
      change.push([currencyName, amountToGive]);
      remainingChange = parseFloat((remainingChange - amountToGive).toFixed(2));
    }
  }

  if (remainingChange > 0) {
    formatResults("INSUFFICIENT_FUNDS", []);
  } else {
    const status = totalCashInDrawer === changeDue ? "CLOSED" : "OPEN";
    formatResults(status, change);
    updateUI(change);
  }
};

purchaseBtn.addEventListener("click", checkCashRegister);
cashInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkCashRegister();
  }
});

updateUI();
