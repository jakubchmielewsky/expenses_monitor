import React from "react";

//icons
import {FaEdit, FaTrash} from "react-icons/fa"

//expenses context
import {useExpenses} from "../hooks/useExpenses";

const ExpenseListItem = ({expense}) => {

  const {dispatch, expensesActions, setExpenseForm} = useExpenses();

  const handleEdit = () => {
    setExpenseForm(expense);
  };

  const handleDelete = () => {
    dispatch({type: expensesActions.delete, payload: expense.id});

  };

  return (
    <tr key={expense.id}>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {expense.date}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {expense.category}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {expense.description}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        ${expense.amount}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button className="text-indigo-500" onClick={handleEdit}>
          <FaEdit/>
        </button>
        <button className="ml-5 text-red-500" onClick={handleDelete}>
          <FaTrash/>
        </button>
      </td>
    </tr>
  )
}

export default ExpenseListItem;