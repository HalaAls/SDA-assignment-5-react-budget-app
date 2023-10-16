import { useEffect, useState } from "react";

import "./App.css";

import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import TargetForSaving from "./components/TargetForSaving";
import TransferToSaving from "./components/TransferToSaving";

const App = () => {
  // - Calculate the account balance using the formula: income - expense - saving = balance.
  // i want to get the income in each time the use submit new income
  // i want to declare and store total incomes and in each time we add the new income to it
  const [incomesAmount, setIncomesAmount] = useState(0);
  const getIncomeAmount = (newIncomeAmount: number) => {
    console.log(newIncomeAmount);
    setIncomesAmount((prevIncomes) => {
      return prevIncomes + newIncomeAmount;
    });
  };

  // repeat the same for expense
  const [expensesAmount, setExpensesAmount] = useState(0);
  const getExpensAmount = (newExpenseAmount: number) => {
    setExpensesAmount((prevExpenses) => {
      return prevExpenses + newExpenseAmount;
    });
  };

  const [savingsAmount, setSavingsAmount] = useState(0);
  const getSavingAmount = (newSavingAmount: number) => {
    setSavingsAmount((prevSavings) => {
      return prevSavings + newSavingAmount;
    });
  };

  const balance = incomesAmount - expensesAmount - savingsAmount;

  return (
    <section className="App">
      <IncomeForm getIncomeAmount={getIncomeAmount} />
      <ExpenseForm getExpensAmount={getExpensAmount} />
      <TargetForSaving savingAmount={savingsAmount} />
      <TransferToSaving getSavingAmount={getSavingAmount} balance={balance} />
    </section>
  );
};
export default App;
