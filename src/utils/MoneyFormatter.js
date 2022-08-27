/**
 * Formats money in Indian Currency format
 */
const MoneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

export default MoneyFormatter;
