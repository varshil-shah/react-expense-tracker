const ExpenseReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      const filterDeletedTransactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
      localStorage.setItem(
        "transactions",
        JSON.stringify(filterDeletedTransactions)
      );
      return {
        ...state,
        transactions: filterDeletedTransactions,
      };
    case "ADD_TRANSACTION":
      const filteredAddTransactions = [action.payload, ...state.transactions];
      localStorage.setItem(
        "transactions",
        JSON.stringify(filteredAddTransactions)
      );
      return {
        ...state,
        transactions: filteredAddTransactions,
      };
    default:
      return state;
  }
};

export default ExpenseReducer;
