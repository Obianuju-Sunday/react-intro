import React from "react";

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }
};

return (
    <div className="expenses-filter">
        <div></div>
    </div>
);

export default ExpenseFilter;