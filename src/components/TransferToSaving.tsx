import { ChangeEvent, FormEvent, useState } from "react";
import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";

type TransferToSavingType = {
  getSavingAmount: (amount: number) => void;
  balance: number;
};
const TransferToSaving = (props: TransferToSavingType) => {
  const [transferAmount, setTransferAmount] = useState(0);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTransferAmount(Number(event.target.value));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    props.getSavingAmount(transferAmount);
    setTransferAmount(0);
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
          <button>Transfer</button>
        </div>
      </form>
    </div>
  );
};
export default TransferToSaving;