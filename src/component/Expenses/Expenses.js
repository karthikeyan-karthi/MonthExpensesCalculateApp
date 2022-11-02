import { ExpensesItem } from "../Expenses/ExpensesItem";
import { useState } from "react";
import "../Expenses/Expenses.css";
import { Card } from "../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import { Charts } from "../Charts/Charts";
import { ExpensesChart } from "./Expenseschart";

export const Expenses = (props) => {
  const [filteryear, setFilterYear] = useState("2022");
  const filterChangerHandler = (selectedyear) => {
    setFilterYear(selectedyear);
  };
  const filterexpenses =props.item.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteryear
  })
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteryear}
        onchangeFilter={filterChangerHandler}
      />
      <ExpensesChart expenses={filterexpenses} />
      <ExpensesList  item={filterexpenses}/>
    </Card>
  );
};
