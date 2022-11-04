import React,{useContext} from 'react'
import { GlobalContext } from '../../Context/GlobalState'
import './IncomeExpenses.css'

const IncomeExpenses = () => {

    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)
    console.log(amounts)

    const expense = amounts.filter(item => item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2)
    const income =  amounts.filter(item => item<0).reduce((acc,item)=>(acc+=item),0).toFixed(2)


  return (
    <div>
        <div className='incomeExpenses'>
            <div className={transactions > 0 ? 'red' :'green'}><p>Income</p><p>${income}</p></div>
            <div className={transactions < 0 ? 'green' :'red'}><p>Expense</p><p>${expense}</p></div>
        </div>        
        

    </div>
  )
}


export default IncomeExpenses