import React from 'react';

import DateItem from './DateItem'
import './ExpenseItem.css'

const ExpenseItem = (prop) => {
    
    return(
        <div className='expenseContainer'>
            <DateItem date={prop.date}/>
            <div className='titleContainer'>{prop.title}</div>
            <div className='costContainer'>Rs. {prop.cost}</div>
        </div>
    )
};

export default ExpenseItem;
