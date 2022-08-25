//import './App.css';
import React, { useEffect, useState, useCallback } from 'react';

import AddExpense from './Expense/AddExpense'
import ShowExpenseForm from './Expense/ShowExpenseForm'
import Expense from './Expense/Expense'
import ErrorModal from './Expense/ErrorModal'

// const expenses = [{  
//   id:'e1',
//   date:new Date(2022, 5, 31),
//   title:"electricity bill",
//   cost:1500
//   },
//   {
//     id:'e2',
//     date:new Date(2022, 2, 14),
//     title:"groceries",
//     cost:2000
//   },
//   {
//     id:'e3',
//     date:new Date(2021, 7, 25),
//     title:"travel fare",
//     cost:5000
//   },
//   {
//     id:'e4',
//     date:new Date(2021, 10, 14),
//     title:"dinner check",
//     cost:6000
  
//   }];

function App() {

  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [validInput , setValidInput] = useState(true);
  const [errorLabel , setErrorLabel] = useState("");
  const [errorHeader , setErrorHeader] = useState("");
  const [expenses, setExpense] = useState([]);

  const fetchExpenseAPI = useCallback(async () => {

    let response;
    try{
      response = await fetch("https://trackexpense-c5ce5-default-rtdb.firebaseio.com/expense.json");
      if(!response.ok)
      {
        throw new Error("could not fetch expenses");
      }
    }
    catch(e){
      showHideErrorModal(false, e.message, "API Error");
    }

    const data = await response.json();

    console.log(data);
    const expenseList = [];

    for (const key in data) {
      expenseList.push({   
        id:key,
        date:new Date(data[key].date),
        title:data[key].title,
        cost:data[key].cost
      });
    }

    setExpense(expenseList);   
  },[]);
 
  useEffect(() => {
    fetchExpenseAPI();
  }, [fetchExpenseAPI]);

  const addToExpenseList = async (expense) => {
   
    try{
      const response = await fetch("https://trackexpense-c5ce5-default-rtdb.firebaseio.com/expense.json",
      { 
        method : 'POST',
        body : JSON.stringify(expense),
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      if(!response.ok)
      {
        throw new Error("could not add expense");
      }
    }
    catch(e){
      showHideErrorModal(false, e.message, "API Error");
      return;
    }
  
    setExpense((prevExpenses) => {
      return [...prevExpenses, expense]
    });
    //fetchExpenseAPI();
  };

  const showHideErrorModal = (flag, errorLabel, errorHeader) =>{
    setValidInput(flag);
    setErrorLabel(errorLabel);
    setErrorHeader(errorHeader);
  };

  const showForm = (flag) => {
    setShowExpenseForm(flag);
  };

  return (
    <div>
      {!validInput && <ErrorModal onShowHideErrorModal={showHideErrorModal} errorLabel={errorLabel} errorHeader={errorHeader}/>}
      {!showExpenseForm && <ShowExpenseForm onShowForm={showForm}/>}
      {showExpenseForm && <AddExpense onAddToExpenseList={addToExpenseList}
       onShowForm={showForm} 
       onShowHideErrorModal={showHideErrorModal}
      />}
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
