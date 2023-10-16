import { ChangeEvent, FormEvent, useState } from "react";

type TargetForSaving = {
  savingAmount: number;
};
const TargetForSaving = (props: TargetForSaving) => {
  const [target, setTarget] = useState(0);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = Number(event.target.value);
    setTarget(target);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTarget(0);
  };
  const savingPercentage = (props.savingAmount / target) * 100;

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="target">Set Target</label>
          <input
            type="number"
            name="target"
            id="target"
            value={target}
            onChange={handleChange}
          />
        </div>
        <button>Reset Target</button>
      </form>
      <p>Target: {target} EUR</p>
      <p>Current Saving: {props.savingAmount} EUR</p>
      <progress max={target} value={props.savingAmount} />
      <p>%{target > 0 ? savingPercentage.toFixed(2) : "0.00"}</p>
    </div>
  );
};
export default TargetForSaving;
