

import React from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {

    return (
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text'/>
            </div>

            <div className="new-expense__control">
                <label>Amout</label>
                <input type='number' min='0.05' step='0.05'/>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type='text'/>
            </div>


        </div>
    )
}

export default ExpenseForm;