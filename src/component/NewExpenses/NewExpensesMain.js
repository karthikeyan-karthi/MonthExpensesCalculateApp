import "../NewExpenses/NewExpensesMain.css"
import {NewExpensesform} from "../NewExpenses/NewExpensesForm"
import  {useState} from "react"



export const NewExpenses=(props)=>{
   
const [editing,setEditing]=useState(false);

  const saveExpenseDateHandler=(enterExpenseDate)=>{
const expenseDate={
  ...enterExpenseDate,
  id:Math.random().toString()
};
props.onAddExpense(expenseDate);
setEditing(false)

  }

const starEditingHandler=()=>{
  setEditing(true)
}


const stopEditingHandler=()=>{
  setEditing(false)
}
    return(
  <div className="NewExpenses-Main">
    {!editing &&(<button className="btn-cancel" onClick={starEditingHandler}>Add New Expenses</button>)}
   {editing &&(<NewExpensesform onSaveExpenseDate={saveExpenseDateHandler} onCancel={stopEditingHandler} />
 )}  </div>

    )
}