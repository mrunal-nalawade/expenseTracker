import React from 'react';

import './ExpenseData.css'
import DataBar from './DataBar';

const ExpenseData = (props) => {

    var totalExpense = 0;

    const perMonth = [
        {month: 'Jan', Value : 0},        
        {month: 'Feb', Value : 0},
        {month: 'Mar', Value : 0},
        {month: 'Apr', Value : 0},
        {month: 'May', Value : 0},
        {month: 'June',Value : 0},
        {month: 'July',Value : 0},
        {month: 'Aug', Value : 0},
        {month: 'Sep', Value : 0},
        {month: 'Oct', Value : 0},
        {month: 'Nov', Value : 0},
        {month: 'Dec', Value : 0}
    ];

    for(const expense of props.expenses)
    {
        const month = expense.date.getMonth();
        perMonth[month].Value += expense.cost;
        totalExpense += expense.cost;
    }

    return(
        <div className='expenseDataContainer'>
            {perMonth.map( mon => <DataBar key={Math.random().toString()} name={mon.month} monthExpense={mon.Value} totalExpense={totalExpense} />)}
        </div>
    );
};

export default ExpenseData;