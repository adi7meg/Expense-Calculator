import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalState'
import { Transaction } from '../Transaction/Transaction'

import './TransactionList.css'
 const TransactionList = () => {
    const {transactions}= useContext(GlobalContext)
    console.log(transactions)
  return (
    <div className='transactionList'>
        <div><h2>History</h2></div>
        {<Transaction/>}
        {/* <ul className='cash'>
            {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction} />))}
        </ul> */}
        
        </div>
  )
}

export default TransactionList 