import {useState} from "react"
import  {Expenses}  from "../src/component/Expenses/Expenses";
import { NewExpenses } from "./component/NewExpenses/NewExpensesMain";



const DummyExpenses= [
  {
    id:1,
    title: "House Rent",
    amount: "2000",
    date: new Date(2022, 9, 28),
  },
  {
    id:2,
    title: "car Insurances",
    amount: "4000",
    date: new Date(2022, 3, 28),
  },
  {
    id:3,
    title: "shopping",
    amount: "2000",
    date: new Date(2021, 6, 28),
  },

  {
    id:4,
    title: "Savings",
    amount: "2000",
    date: new Date(2020, 6, 28),
  },


 
];
function App() {
     const [expenses,setExpenses]  =useState(DummyExpenses)
  const addExpensesHandler=expense=>{
       setExpenses((prevsExpenses)=>{
           return [expense,...prevsExpenses]
       })
  }
  return (
    <div >
     
      <NewExpenses  onAddExpense={addExpensesHandler} />
      <Expenses item={expenses}/>
    </div>

  );
}

export default App;
