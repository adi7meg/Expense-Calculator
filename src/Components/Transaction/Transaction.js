import {React, useContext} from 'react'
import './Transaction.css'
import { GlobalContext } from '../../Context/GlobalState'
export const Transaction = (transaction) => {
    const {deleteTransactions} =useContext(GlobalContext)
    const {transactions}= useContext(GlobalContext)

    // const sign =transactions.amount < 0 ? '-' : '+' 
  return (


    <ul>
{transactions.map(transaction=>(<li className={transaction.amount < 0 ? 'minus' : 'plus'}>{transaction.text} <span>{transaction.amount < 0 ? '-' : '+' } ${Math.abs(transaction.amount)}</span><button onClick={()=>deleteTransactions(transaction.id)} className='delete-btn'>x</button></li>))}
    </ul>

  )
}
