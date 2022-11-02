import "../Expenses/ExpensesDate.css"


 export const Expensesdate=(props)=>{
    const month=props.date.toLocaleString('en-us',{month:'long'})
    const day=props.date.toLocaleString('en-us',{day:'2-digit'})
    const year=props.date.getFullYear();
return(
<div className="expenses-itemmain">
    <div className="expenses-date_month">{month}</div>
    <div className="expenses-date_year">{year}</div>
    <div className="expenses-date_day">{day}</div>
</div>
)
}
