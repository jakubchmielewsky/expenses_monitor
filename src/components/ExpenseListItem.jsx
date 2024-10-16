import React from "react";

//icons
import {FaEdit, FaTrash} from "react-icons/fa"

//expenses context
import { useExpenses } from "../context/ExpensesContext";
import { useForm } from "../context/FormContext";

//toasts
import { useToasts } from "../context/ToastContext";

const ExpenseListItem = ({expense}) => {

  const {deleteExpense} = useExpenses();
  const {setExpenseForm, expenseFormRef,setEdit} = useForm();
  const {addToast} = useToasts();

  const handleEdit = () => {
    setExpenseForm(expense);
    setEdit(true);
    expenseFormRef.current.scrollIntoView({behavior: 'smooth'});
  };

  const handleDelete = () => {
    //dispatch({type: expensesActions.delete, payload: expense.id});
    deleteExpense(expense.id);
    addToast("Expense deleted","red-500");
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