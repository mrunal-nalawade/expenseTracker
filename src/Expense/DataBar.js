import React from 'react';

import './DataBar.css';

const DataBar = (props) => {

    var monthRise = '0%';

    if(props.monthExpense > 0)
        monthRise = Math.round((props.monthExpense * 100) / props.totalExpense) + '%';

    return(
        <div className='dataBarContainer'>
            <div className='dataBarUnit'>
                <div className='expenseRise' style={{height: monthRise}}>
                </div>
            </div>
            <label className='label'>{props.name}</label>
        </div>
      
    );
};

export default DataBar;