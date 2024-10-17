import React from "react";

//icons
import {FaPlus} from "react-icons/fa";

//components
import InputGroup from "./InputGroup";

//expenses context
import { useExpenses } from "../context/ExpensesContext";
import { useForm } from "../context/FormContext";

//toasts
import { useToasts } from "../context/ToastContext";

const AddExpenseForm = () => {

  const {addExpense,editExpense} = useExpenses();
  const {expenseForm, setExpenseForm, expenseFormRef, edit, setEdit} = useForm();
  const {addToast} = useToasts();

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setExpenseForm({
      ...expenseForm,
      [name]: value
    });
  };

  const getTodaysDate = () => {
    const date= new Date();

    const day= String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${year}-${month}-${day}`
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(expenseForm.amount && expenseForm.category){

      if(edit){
        editExpense({...expenseForm,date:expenseForm.date?expenseForm.date:getTodaysDate()});
        addToast('Expense edited','emerald-500');
        setEdit(false);
      }
      else{
        addExpense({...expenseForm,date:expenseForm.date?expenseForm.date:getTodaysDate()});
        addToast('Expense added','emerald-500');
      }
    }else{
      addToast('Complete the form', 'yellow-500');
    }


    setExpenseForm({...expenseForm,amount: "", date: "", description: ""});
  }


  return (
    <div className="bg-white overflow-hidden shadow rounded-lg" ref={expenseFormRef}>
      <div className="px-4 py-5">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
        {edit?"Edit":"Add new"} expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <InputGroup
              name="amount"
              label="Amount"
              type="number"
              value={expenseForm.amount}
              onChange={handleInputChange}/>

            {/* <InputGroup
              name="category"
              label="Category"
              type="text"
              value={expenseForm.category}
              onChange={handleInputChange}/> */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  name="category"
                  className="mt-2 shadow w-full block border-gray-300 rounded-md pl-3 py-0.5"
                  onChange={handleInputChange}
                  value={expenseForm.category}>
                  <option value="Other">Other</option>
                  <option value="Rent">Rent</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Food">Food</option>
                  <option value="Bills">Bills</option>
                  <option value="Transport">Transport</option>
                  
                </select>
              </div>

            <InputGroup
              name="date"
              label="Date"
              type="date"
              value={expenseForm.date}
              onChange={handleInputChange}/>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                rows="3"
                className="mt-1 shadow w-full border-gray-300 rounded-md"
                value={expenseForm.description}
                onChange={handleInputChange}></textarea>

            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 px-6 py-2 rounded-md mx-auto mt-4 inline-flex items-center gap-2">
            <FaPlus/>
            {edit?"Edit":"Add"} Expense
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddExpenseForm;