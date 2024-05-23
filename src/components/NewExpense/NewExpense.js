

import React from "react";
import './NewExpenses.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random() * 5).toString()
        }
        console.log(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )




};

export default NewExpense;