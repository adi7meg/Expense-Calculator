import './App.css';
import AddTransaction from './Components/AddTransaction/AddTransaction';
import Balance from './Components/Balance/Balance';
import  Header  from './Components/Header/Header';
import IncomeExpenses from './Components/IncomeExpenses/IncomeExpenses';
import { Transaction } from './Components/Transaction/Transaction';
import TransactionList from './Components/TransactionList/TransactionList';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div>
     <Balance/>
     <IncomeExpenses/>
     <TransactionList/>
     <AddTransaction/>
     <Transaction/>
     </div>
    </GlobalProvider>
  );
}

export default App;
