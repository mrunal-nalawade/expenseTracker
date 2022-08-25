import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'
import ExpenseData from './ExpenseData'
import TotalExpense from './TotalExpense';

import './Expense.css'

const Expense = (props) => {
    
    const [selectYear , SetSelectYear] = useState('2022');

    const onYearChangeHandler = (sYear) => {
        SetSelectYear(sYear);
    };

    const selectedExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectYear;
    });

    return(
        <div className='yearWiseContainer'>
            <ExpenseFilter selected={selectYear} onYearChangeHandler={onYearChangeHandler} />
            {selectedExpenses.length === 0 && <h2 className='noExpense'> No expenses this year</h2>}
            {selectedExpenses.length > 0 && <ExpenseData expenses={selectedExpenses} />}
            {selectedExpenses.length > 0 && selectedExpenses.map(expense => <ExpenseItem 
                key={expense.id} 
                date={expense.date} 
                title={expense.title} 
                cost={expense.cost} 
            />)}
            {selectedExpenses.length > 0 && <TotalExpense expenses={selectedExpenses} />}
        </div>
    )
};

export default Expense;