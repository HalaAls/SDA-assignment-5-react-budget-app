import { ChangeEvent, FormEvent, useState } from "react";
import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";
import { toast } from "react-toastify";

type TransferToSaving = {
  getSavingAmount: (amount: number) => void;
  balance: number;
};
const TransferToSaving = (props: TransferToSaving) => {
  const [transferAmount, setTransferAmount] = useState(0);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const transferAmount = Number(event.target.value);
    setTransferAmount(transferAmount);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.getSavingAmount(transferAmount);
    setTransferAmount(0);
    toast.success("Transfer Has Been Done Successfuly");
  };

  return (
    <div className="formDiv">
      <p>Current Balance:{props.balance}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Transfer To Saving Acount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={transferAmount}
            onChange={handleChange}
          />
        </div>
        <div className="center">
          <button className="btn">Transfer</button>
        </div>
      </form>
    </div>
  );
};
export default TransferToSaving;
