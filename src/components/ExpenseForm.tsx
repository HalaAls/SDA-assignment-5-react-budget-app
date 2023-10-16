import { ChangeEvent, FormEvent, useState } from "react";
import IncomeExpenseTypes from "../types/componentsTypes";

type expenseAmount = {
  getExpensAmount: (newExpenseAmount: number) => void;
};

const ExpenseForm = (props: expenseAmount) => {
  const [expenses, setExpenses] = useState<IncomeExpenseTypes[]>([]);
  const [expense, setExpense] = useState<IncomeExpenseTypes>({
    source: "",
    amount: "0",
    date: "",
    id: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExpense((prevExpense) => {
      return { ...prevExpense, [name]: value };
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const expenseAmount = Number(expense.amount);
    props.getExpensAmount(expenseAmount);
    if (expense.source && expense.amount && expense.date) {
      expense.id = `${expense.date}-${expense.amount}-${expense.source}`;
      setExpenses((prevExpenses) => {
        return [...prevExpenses, expense];
      });
    }
  };
  const handleDelete = (id: string) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };
  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="source">Expense Source</label>
          <input
            type="text"
            name="source"
            id="source"
            value={expense.source}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amont">Amount of Expense</label>
          <input
            type="text"
            name="amount"
            id="amount"
            value={expense.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date of Expense</label>
          <input
            type="date"
            name="date"
            id="date"
            value={expense.date}
            onChange={handleChange}
            required
          />
        </div>
        <button> Add Expense</button>
      </form>
      <ul>
        {expenses.length > 0 ? (
          expenses.map((expense, index) => (
            <li key={expense.id}>
              <button
                className="deleteButton"
                onClick={() => handleDelete(expense.id)}
              >
                x
              </button>
              {expense.source}: {expense.amount}EUR on {expense.date}
            </li>
          ))
        ) : (
          <li>No Avaliable Data</li>
        )}
      </ul>
    </div>
  );
};
export default ExpenseForm;
