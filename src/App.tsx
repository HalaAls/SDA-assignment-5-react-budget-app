import {useState} from 'react'; 
import IncomeForm  from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import TargetForSaving from './components/TargetForSaving';
import TransferToSaving from './components/TransferToSaving';
const App = () => {
  const [savingAmount, setSavingAmount] = useState(0);



  const getSavingAmount = (amount : number) => {
    setSavingAmount(amount);

  }
  return (
    <div className="App">
      <IncomeForm />
      <ExpenseForm />
      <TargetForSaving savingAmount={savingAmount}/>
      <TransferToSaving getSavingAmount={getSavingAmount}/>

    </div>
  );
};

export default App;
