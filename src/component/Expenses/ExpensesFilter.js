
import "../Expenses/ExpensesFilter.css"

 export const ExpensesFilter =(props)=>{

    const dropdownChangerHandler=(event)=>{
    props.onchangeFilter(event.target.value)
    }
    return(
        <div className="expenses-mainfilter">
            <div className="expenses-filter">
                <label>Filter by year</label>
                 <select value={props.selected}  onChange={dropdownChangerHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                 </select>
            </div>

        </div>
    )
}