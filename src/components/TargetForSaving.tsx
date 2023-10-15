import { ChangeEvent, FormEvent, useState } from "react";

type TargetForSavingType ={
  savingAmount : number;
};
const TargetForSaving = (props: TargetForSavingType) => {

    const [target, setTarget] = useState(0);
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setTarget(Number(event.target.value));
    };
  
    const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      setTarget(0);
    };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="target">Set Target</label>
          <input type="number" name="target" id="target" value={target} onChange={handleChange} />
        </div>
        <button>Reset Target</button>
      </form>
      <p>Target: {target} EUR</p>
      <p>Current Saving: {props.savingAmount} EUR</p>
      <progress max="1000" value={300}/>
    </div>
  );
};
export default TargetForSaving;
