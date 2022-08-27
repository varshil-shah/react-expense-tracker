import Category from "./Category";

/**
 * Filters all transactions based on provided category
 * @param {[{id: string, title: string, amount: number, date: Date}]} transactions
 * @param {String} category
 * @returns {[{id: string, title: string, amount: number, date: Date}]}
 */
export const FilterCategory = (transactions, category) => {
  if (category === Category.All) {
    return transactions;
  } else if (category === Category.Income) {
    const filteredTransactions = transactions.filter((transaction) => {
      return transaction.amount > 0;
    });
    return filteredTransactions;
  } else if (category === Category.Expense) {
    const filteredTransactions = transactions.filter((transaction) => {
      return transaction.amount < 0;
    });
    return filteredTransactions;
  }
};

/**
 * Filters all transactions based on provided year
 * @param {[{id: string, title: string, amount: number, date: Date}]} transactions
 * @param {String} year
 * @returns {[{id: string, title: string, amount: number, date: Date}]}
 */
export const FilterYear = (transactions, year) => {
  const filteredTransactions = transactions.filter((transaction) => {
    const date = new Date(transaction.date).getFullYear();
    return date === year;
  });
  return filteredTransactions;
};
