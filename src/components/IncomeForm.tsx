import { ChangeEvent, FormEvent, useState } from "react";
import IncomeExpenseTypes from "../types/componentsTypes";

type incomeAmountProps = {
  getIncomeAmount: (newIncomeAmount: number) => void
}

const IncomeForm = (props : incomeAmountProps) => {
  const [income, setIncome] = useState<IncomeExpenseTypes>({
    source: "",
    amount: "0",
    date: "",
  });

  const [incomes, setIncomes] = useState<IncomeExpenseTypes[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setIncome((prevIncome) => {
      return { ...prevIncome, [name]: value };
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.getIncomeAmount(Number(income.amount));

    if (income.source && income.amount && income.date) {
      setIncomes((prevIncomes) => {
        return [...prevIncomes, income];
      });
    }
  };

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="source">Income Source</label>
          <input
            type="text"
            name="source"
            id="source"
            value={income.source}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amont">Amount of Income</label>
          <input
            type="text"
            name="amount"
            id="amount"
            value={income.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date of Income</label>
          <input
            type="date"
            name="date"
            id="date"
            value={income.date}
            onChange={handleChange}
            required
          />
        </div>
        <button> Add Income</button>
      </form>
      <ul>
        {incomes.length ? (
          incomes.map((income, index) => (
            <li key={index}>
              {income.source}: {income.amount}EUR on {income.date}
            </li>
          ))
        ) : (
          <li>No Avaliable Data</li>
        )}
      </ul>
    </div>
  );
};
export default IncomeForm;
