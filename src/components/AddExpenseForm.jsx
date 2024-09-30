import React from "react";

//icons
import {FaPlus} from "react-icons/fa";

//components
import InputGroup from "./InputGroup";

//expenses context
import {useExpenses} from "../hooks/useExpenses";

//expense form context
import {useAddExpenseForm} from "../hooks/useAddExpense";

//id generator
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {

  const {dispatch, expensesActions} = useExpenses();

  const {expense, setExpense} = useAddExpenseForm();
  //const [expense, setExpense] = useState({id: "", amount: "", category: "", date: "", description: ""});


  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setExpense({
      ...expense,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId=uuidv4();
    dispatch({type:expensesActions.add, payload: {id: newId, ...expense}});


    setExpense({id: "", amount: "", category: "", date: "", description: ""});
  }

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Add new expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4">
            <InputGroup
              name="amount"
              label="Amount"
              type="number"
              value={expense.amount}
              onChange={handleInputChange}/>

            <InputGroup
              name="category"
              label="Category"
              type="text"
              value={expense.category}
              onChange={handleInputChange}/>

            <InputGroup
              name="date"
              label="Date"
              type="date"
              value={expense.date}
              onChange={handleInputChange}/>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                rows="3"
                className="mt-1 shadow w-full block border-gray-300 rounded-md"
                value={expense.description}
                onChange={handleInputChange}></textarea>

            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 px-6 py-2 rounded-md mx-auto mt-4 inline-flex items-center gap-2">
            <FaPlus/>Add Expense
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddExpenseForm;