import { useState } from "react";

import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";
import TargetForSaving from "./TargetForSaving";
import TransferToSaving from "./TransferToSaving";
// import Navigation from "./components/Navigation";

const Budget = () => {
  const [incomesAmount, setIncomesAmount] = useState(0);
  const getIncomeAmount = (newIncomeAmount: number) => {
    console.log(newIncomeAmount);
    setIncomesAmount((prevIncomes) => {
      console.log(prevIncomes);
      return prevIncomes + newIncomeAmount;
    });
  };
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
    <>
      <IncomeForm getIncomeAmount={getIncomeAmount} />
      <ExpenseForm getExpensAmount={getExpensAmount} />
      <TargetForSaving savingAmount={savingsAmount} />
      <TransferToSaving getSavingAmount={getSavingAmount} balance={balance} />
    </>
  );
};
export default Budget;
