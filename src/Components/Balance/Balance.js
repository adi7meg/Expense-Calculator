import {React,useContext} from 'react'
import { GlobalContext } from '../../Context/GlobalState'
import './Balance.css'



const Balance = () => {

  const {transactions}= useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2)

  return (
    <div className='Balance'>
        <div className='yourBalance'> Your Balance</div>
     <div className='balanceAmount'>$ {total}</div>
      </div>
  
  )
}


export default Balance