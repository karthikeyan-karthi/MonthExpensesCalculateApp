import "../NewExpenses/NewExpensesForm.css";
import { useState } from "react";

export const NewExpensesform = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const[userInput,setUserInput]=useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // })

  const titleChangerHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value
    // })
  };
  const amountChangerHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value
    // })
  };
  const dateChangerHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    // enteredDate:event.target.value
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expensesData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseDate(expensesData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="inputrow">
        <div className="input-title">
          <label className="lable-title">Title</label>
          <input
            onChange={titleChangerHandler}
            className="input-text"
            type="text"
            value={enteredTitle}
          />
        </div>
        <div className="input-Amount">
          <label className="lable-amount">Amount</label>
          <input
            onChange={amountChangerHandler}
            className="input-number"
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
          />
        </div>
      </div>
      <div className="input-date">
        <label className="lable-date">Date</label>
        <input
          onChange={dateChangerHandler}
          className="input-type__date"
          value={enteredDate}
          type="date"
          min="2019-01-01"
          max="2022-12-31"
        />
      </div>
    <button className="Cancel-btn" type="button" onClick={props.onCancel}>Cancel</button>
      <button type="submit" className="btn">
        Add Expenses
      </button>
    </form>
  );
};
