/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

const formatCurrency = (amount, locale = `en-US`, currency = `USD`) => {
  let formattedCurrency = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);

  return formattedCurrency;
};

const tipCalculator = (sum, percentage) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
      Sum before tip: ${formatCurrency(sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatCurrency(tip)}
      Total:          ${formatCurrency(total)}
    `);
};

tipCalculator(29.95, 18);
