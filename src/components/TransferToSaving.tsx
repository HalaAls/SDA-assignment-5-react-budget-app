import { ChangeEvent, FormEvent, useState } from "react";

type TransferToSavingType = {
    getSavingAmount : (amount: number) => void ;
};

const TransferToSaving = (props: TransferToSavingType) =>{
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
        <div>
            <p>Current Balance: 13300</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="amount">Transfer To Saving Acount</label>
                    <input type="number" name="amount" id="amount" value={transferAmount} onChange={handleChange} />
                </div>
                <button>Transfer</button>
            </form>
        </div>
    );
};
export default TransferToSaving;