const taxGST = 5;
const taxPST = 8;

const calculateTotal = (prices) => {
  const totals = {};

  //Add together all values from the prices array
  totals.beforeTaxt = prices.reduce((a, b) => a + b, 0);

  //calculate totals GST, PST and SUM
  totals.GST = totals.beforeTaxt * (taxGST / 100);
  totals.PST = totals.beforeTaxt * (taxPST / 100);
  totals.sum = totals.beforeTaxt + (totals.GST + totals.PST);

  return totals;
};

const showTotals = (prices) => {
  const totals = calculateTotal(prices);

  return `
        Before Tax: \t${totals.beforeTaxt.toFixed(2)}
        GST: \t${totals.GST.toFixed(2)}
        PST: \t${totals.PST.toFixed(2)}
        ------------------------------
        Sum total: \t${totals.sum.toFixed(2)}
    `;
};

export default showTotals;
