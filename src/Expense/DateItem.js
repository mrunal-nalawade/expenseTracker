import React from 'react';

import './DateItem.css'

const DateItem = (prop) => {

    const day = prop.date.toLocaleDateString('en-US', {day : 'numeric'});
    const month = prop.date.toLocaleDateString('en-US', {month: 'long'});
    const year = prop.date.toLocaleDateString('en-US', {year : 'numeric'});

    return(
        <div className='dateContainer'>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    )
};

export default DateItem;