import React from "react";

//icons
import {FaPlus} from "react-icons/fa";

//components
import InputGroup from "./InputGroup";

//expenses context
import { useExpenses } from "../context/ExpensesContext";
import { useForm } from "../context/FormContext";

//id generator
import { v4 as uuidv4 } from "uuid";

//toasts
import { useToasts } from "../context/ToastContext";

const AddExpenseForm = () => {

  const {dispatch, expensesActions} = useExpenses();
  const {expenseForm, setExpenseForm, expenseFormRef} = useForm();
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

      //if id is set, edit expense with that id
      if(expenseForm.id){
        dispatch({type:expensesActions.edit, payload: {...expenseForm,date:expenseForm.date?expenseForm.date:getTodaysDate()}});//if there is no date set today
        addToast('Expense edited','emerald-500');
      }
      else{
        const newId=uuidv4();
        dispatch({type:expensesActions.add, payload: {...expenseForm, id: newId,date:expenseForm.date?expenseForm.date:getTodaysDate()}});
        addToast('Expense added','emerald-500');
      }
    }else{
      addToast('Complete the form', 'yellow-500');
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
              onChange={handleInputChange}/>

            <InputGroup
              name="category"
              label="Category"
              type="text"
              value={expenseForm.category}
              onChange={handleInputChange}/>

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
            {expenseForm.id?"Edit":"Add"} Expense
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddExpenseForm;