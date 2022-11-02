import {Expensesdate}  from "../Expenses/ExpensesDate";
import "../Expenses/ExpensesItem.css"
import  {Card}  from "../UI/Card";
import { useState} from "react"


export const ExpensesItem=  (props)=>  {

 
  return (
    <li>
    <Card className="expenses-item">
              <Expensesdate date={props.date} />
      <div className="expen">
        <h2>{props.title}</h2>
      <div className="expensesprice">
        ${props.amount}
      </div>

      </div>
    </Card>
    </li>
  );
};

