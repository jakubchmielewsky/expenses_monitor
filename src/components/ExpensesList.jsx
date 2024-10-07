import React,{useState, useEffect} from "react";

//components
import InputGroup from "./InputGroup";

//expenses context
import {useExpenses} from "./../context/ExpensesContext"

//list items
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = () => {

  const {expenses} = useExpenses();

  const [dateFilter,setDateFilter] = useState("");
  const [categoryFilter,setCategoryFilter] = useState("");

  const filteredExpenses = expenses.filter((expense) => {
    const matchesDate = dateFilter ? expense.date === dateFilter : true;
    const matchesCategory = categoryFilter ? expense.category.toLowerCase().includes(categoryFilter.toLowerCase()) : true;

    return matchesDate && matchesCategory;
  });
  
  

  return (
    <div className="bg-white shadow rounded-lg mt-8">
      <div className="py-5 px-4">
        <h2 className="font-medium text-lg">Expense List</h2>

        <div className="mt-4 grid grid-cols-2 gap-6 max-w-xl">
          <InputGroup label="Filter by date" type="date" value={dateFilter} onChange={(e)=>setDateFilter(e.target.value)}/>
          <InputGroup label="Filter by category" type="text" value={categoryFilter} onChange={(e)=>setCategoryFilter(e.target.value)}/>
        </div>

        <div className="mt-6 shadow border-gray-200 overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 ">
              <tr>
                <th
                  className="px-6 py-3 text-gray-500 uppercase font-medium tracking-wider text-xs">
                  Date
                </th>
                <th
                  className="px-6 py-3 text-gray-500 uppercase font-medium tracking-wider text-xs">
                  Category
                </th>
                <th
                  className="px-6 py-3 text-gray-500 uppercase font-medium tracking-wider text-xs">
                  Description
                </th>
                <th
                  className="px-6 py-3 text-gray-500 uppercase font-medium tracking-wider text-xs">
                  Amount
                </th>
                <th
                  className="px-6 py-3 text-gray-500 uppercase font-medium tracking-wider text-xs">
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredExpenses.reverse().map((expense) => {
                return (
                  <ExpenseListItem expense={expense} key={expense.id}/>
                )
              })
}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default ExpenseList;