import React from 'react';

import './TotalExpense.css';

const TotalExpense = (props) => {
    
    var total = 0;
    for(const expense of props.expenses)
    {
        total += expense.cost;
    }

    return(
        <div className='bottomLine'>
            <div className='totalExpenseContainer'>
                <label>Total Expense</label>
                <label>Rs. {total}</label>
            </div>
        </div>
        
    )
};

export default TotalExpense;