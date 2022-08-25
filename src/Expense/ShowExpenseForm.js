import React from 'react';

import './ShowExpenseForm.css'

const ShowExpenseForm = (props) => {

    const showExpenseForm = () => {
        props.onShowForm(true);
    };

    return(
        <div className='showExpenseFormContainer'>
            <button className='showExpenseFormButton' onClick={showExpenseForm}>Add New Expense</button>
        </div>
    );
};

export default ShowExpenseForm;