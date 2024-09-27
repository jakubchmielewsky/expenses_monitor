import React from "react";

//icons
import {FaPlus} from "react-icons/fa";

//components
import InputGroup from "./InputGroup";

const AddExpenseForm = () => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Add new expense</h2>
        <form onSubmit={"handleSubmit"}>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4">
            <InputGroup label="Amount" type="number" value={""} onChange={""}/>
            <InputGroup label="Category" type="text" value={""} onChange={""}/>
            <InputGroup label="Date" type="date" value={""} onChange={""}/>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>

              <textarea
                name="description"
                rows="3"
                className="mt-1 shadow w-full block border-gray-300 rounded-md"
                onChange={""}></textarea>

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