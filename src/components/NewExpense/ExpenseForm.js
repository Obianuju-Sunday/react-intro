

import React from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' />
                </div>

                <div className="new-expense__control">
                    <label>Amout</label>
                    <input type='number' min='0.05' step='0.05' />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2024-05-18' max='2026-11-15' />
                </div>

            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>

        </form>

    )
}

export default ExpenseForm;