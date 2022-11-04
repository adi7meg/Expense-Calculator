import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer';


//Initial State
const initalState={
    transactions: [
        {id:1,text:'flower', amount:-20},
        {id:2,text:'Salary', amount:300},
        {id:3,text:'Book', amount:-10},
        {id:4,text:'Camera', amount:150},
        // {id:4,text:'Car', amount:-111250}
    ]
}

//Create Context
export const GlobalContext = createContext(initalState);




// Provider Component

export const GlobalProvider = ({children}) =>{

    const [state,dispatch] = useReducer(AppReducer,initalState)

    //action add transaction
    const addTransactions = (transaction) => {
        dispatch({
        type:'ADD_TRANSACTION',
        payload: transaction
       })  
       }

    //action delete
    const deleteTransactions = (id) => {
        dispatch({
        type:'DELETE_TRANSACTION',
        payload: id
       })  
       }
    return(
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            addTransactions,
            deleteTransactions
        }}>
            {children}
        </GlobalContext.Provider>
    )

}
