import { useState } from "react";

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
      console.log(prevIncomes);
      return prevIncomes + newIncomeAmount;
    });
    updateBalance();
  };
  // repeat the same for expense
  const [expensesAmount, setExpensesAmount] = useState(0);
  const getExpensAmount = (newExpenseAmount: number) => {
    // console.log(newExpenseAmount);
    setIncomesAmount((prevExpenses) => {
      // console.log(prevExpenses);
      return prevExpenses + newExpenseAmount;
    });
    updateBalance();
  };

  const [savingsAmount, setSavingsAmount] = useState(0);
  const getSavingAmount = (newSavingAmount: number) => {
    console.log(newSavingAmount);
    setSavingsAmount((prevSavings) => {
      // console.log(prevSavings);
      return prevSavings + newSavingAmount;
    });
    updateBalance();
  };

  // now i have the total incomes , total expenses , total saving
  // i want to Calculate the account balance using the formula: income - expense - saving = balance.

  const [balance, setBalance] = useState(0);
  const updateBalance = () => {
    const newBalance = incomesAmount - expensesAmount - savingsAmount;
    setBalance(newBalance);
  };

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
