/**
 * Returns a formatted string representation of date
 * @param {Date} date
 * @returns {String}
 */
const FormatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
};

export default FormatDate;
