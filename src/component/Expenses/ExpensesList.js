import {ExpensesItem} from "../Expenses/ExpensesItem" 
import "../Expenses/ExpensesList.css"

 export const ExpensesList=(props)=>{
  
//     if(props.item.length === 0){
// return 
//     }
    return(

      props.item.length ===0 ?<h2 className="expenses-fiter">no expenses founded</h2> : <ul className="expenses-list">
        {props.item.map((expense) => (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />))}
    </ul>
    )
 } 