import React, { useState } from 'react';

import './AddExpense.css'

const AddExpense = (props) => {

    const [title , setTitle] = useState("");
    const [date , setDate] = useState("");
    const [cost , setCost] = useState("");

    const setTitleHandler = (event) => {
        setTitle(event.target.value);
    };

    const setDateHandler = (event) => {
        setDate(event.target.value);
    };
    
    const setCostHandler = (event) => {
        setCost(event.target.value);
    };

    const submitHanddler = (event) => {
        event.preventDefault();
        
        const errorheader = "Invalid Input!";

        if(title === "")
        {
            props.onShowHideErrorModal(false, "Please enter valid Title", errorheader);
            return;
        }
        else if(+cost === 0)
        {
            props.onShowHideErrorModal(false, "Please enter valid cost", errorheader);
            return;
        }
        else if(date === "") 
        {
            props.onShowHideErrorModal(false, "Please enter valid date", errorheader);
            return;
        }

        const expense = {
            id:Math.random().toString(),
            date:new Date(date),
            title:title,
            cost: +cost
        };

        try{
            props.onAddToExpenseList(expense);
        }
        catch(e){
            props.showHideErrorModal(false, "api error");
        }

        setTitle("");
        setDate("");
        setCost("");
    };

    const hideExpenseForm = () => {
        props.onShowForm(false);
    };

    return(
        <React.Fragment>
            <form className='expenseFormContainer' onSubmit={submitHanddler}>
                <div className='upperDiv'>
                    <div className='inputContainer'>
                        <label className='label'>Title</label>
                        <input className='input' type='text' value={title} name='title' onChange={setTitleHandler}></input>  
                    </div>
                    <div className='inputContainer'>
                        <label className='label'>cost</label>
                        <input className='input' type='number' value={cost} min='0' step='0.1' name='cost' onChange={setCostHandler}></input>  
                    </div>
                </div>
                <div className='upperDiv'>
                    <div className='inputContainer'>
                        <label className='label'>date</label>
                        <input className='input' type='date' value={date} name='date' 
                        min="2020-01-01" max="2024-12-31" onChange={setDateHandler}></input>
                    </div>
                    <div className='buttonContainer'>
                        <button className='expenseButton' type='submit'>Add Expense</button>
                        <button className='expenseButton' onClick={hideExpenseForm}>Cancel</button>
                    </div>
                </div>
            </form>
        </React.Fragment>
        
    );
};

export default AddExpense;