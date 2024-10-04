import React from "react";

//icons
import {FaPlus} from "react-icons/fa";

//components
import InputGroup from "./InputGroup";

//expenses context
import {useExpenses} from "../hooks/useExpenses";

//id generator
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {

  const {dispatch, expensesActions,expenseForm, setExpenseForm, expenseFormRef} = useExpenses();

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setExpenseForm({
      ...expenseForm,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //if id is set, edit expense with that id
    if(expenseForm.id){
      dispatch({type:expensesActions.edit, payload: expenseForm});
    }
    else{
      const newId=uuidv4();
      dispatch({type:expensesActions.add, payload: {...expenseForm, id: newId }});
    }


    setExpenseForm({id: "", amount: "", category: "", date: "", description: ""});
  }


  return (
    <div className="bg-white overflow-hidden shadow rounded-lg" ref={expenseFormRef}>
      <div className="px-4 py-5">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
        {expenseForm.id?"Edit":"Add new"} expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <InputGroup
              name="amount"
              label="Amount"
              type="number"
              value={expenseForm.amount}
              onChange={handleInputChange}
              required={true}/>

            <InputGroup
              name="category"
              label="Category"
              type="text"
              value={expenseForm.category}
              onChange={handleInputChange}
              required={true}/>

            <InputGroup
              name="date"
              label="Date"
              type="date"
              value={expenseForm.date}
              onChange={handleInputChange}
              required={true}/>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                rows="3"
                className="mt-1 shadow w-full block border-gray-300 rounded-md"
                value={expenseForm.description}
                onChange={handleInputChange}></textarea>

            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 px-6 py-2 rounded-md mx-auto mt-4 inline-flex items-center gap-2">
            <FaPlus/>
            {expenseForm.id?"Edit":"Add"} Expense
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddExpenseForm;