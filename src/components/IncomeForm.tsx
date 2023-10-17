import { ChangeEvent, FormEvent, useState } from "react";
import IncomeExpenseTypes from "../types/componentsTypes";
import { toast } from "react-toastify";

type incomeAmount = {
  getIncomeAmount: (newIncomeAmount: number) => void;
};

const IncomeForm = (props: incomeAmount) => {
  const [incomes, setIncomes] = useState<IncomeExpenseTypes[]>([]);
  const [income, setIncome] = useState<IncomeExpenseTypes>({
    source: "",
    amount: "0",
    date: "",
    id: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setIncome((prevIncome) => {
      return { ...prevIncome, [name]: value };
    });
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const incomeAmount = Number(income.amount);
    props.getIncomeAmount(incomeAmount);
    if (income.source && income.amount && income.date) {
      income.id = `${income.date}-${income.amount}-${income.source}`;
      setIncomes((prevIncomes) => {
        console.log(income.id);
        return [...prevIncomes, income];
      });
      toast.success("New Income Has Been Added Successfuly");
    } else{
      toast.error("Data is Missing");
    }
  };
  const handleDelete = (id: string) => {
    const updatedIncomes = incomes.filter((income) => income.id !== id);
    setIncomes(updatedIncomes);
    toast.success("Income Has Been Deleted Successfuly");
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
            // required
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
            // required
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
            // required
          />
        </div>
        <button className="btn">Add Income</button>
      </form>
      <ul>
        {incomes.length ? (
          incomes.map((income) => (
            <li key={income.id}>
              <button
                className="deleteButton"
                onClick={() => handleDelete(income.id)}
              >
                x
              </button>
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
