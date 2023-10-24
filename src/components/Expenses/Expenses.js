import React, { useState } from 'react';
import './Expenses.css';
import Card from "../UI/Card"
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const [filterInfotext, setFilterInfotext] = useState("2019,2021,202");
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        if (selectedYear === "2019") {
            setFilterInfotext("2020,2021 & 2022");
        } else if (selectedYear == "2020") {
            setFilterInfotext("2019,2021 & 2022");
        } else if (selectedYear == "2021") {
            setFilterInfotext("2019,2020 & 2022");
        } else {
            setFilterInfotext("2019,2020 & 2021");
        }
    }

    return (
        <Card className="expenses">
            <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
            <p style={{ color: "#ffff" }}>Date for year {filterInfotext} is hidden</p>
             {props.items.map((expense,index)=>(
                <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date} />
             ))}
            {/* <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            /> */}
        </Card>
    );
}

export default Expenses;