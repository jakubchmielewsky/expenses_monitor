import React from "react";

//components
import InputGroup from "./InputGroup";

//icons
import {FaEdit,FaTrash} from "react-icons/fa"

const ExpenseList = () => {
    return(
        <div className="bg-white shadow rounded-lg mt-8">
            <div className="py-5 px-4">
                <h2 className="font-medium text-lg">Expense List</h2>

                <div className="mt-4 grid grid-cols-1 gap-y-6">
                    <InputGroup label="Filter by date" type="" value={""} onChange={""}/>
                    <InputGroup label="Filter by category" type="" value={""} onChange={""}/>
                </div>

                <div className="mt-6 shadow border-gray-200 overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="bg-gray-50 ">
                            <tr>
                                <th className="px-6 py-3 text-gray-500 uppercase font-medium tracking-wider text-xs">
                                    Date
                                </th>
                                <th className="px-6 py-3 text-gray-500 uppercase font-medium tracking-wider text-xs">
                                    Category
                                </th>
                                <th className="px-6 py-3 text-gray-500 uppercase font-medium tracking-wider text-xs">
                                    Description
                                </th>
                                <th className="px-6 py-3 text-gray-500 uppercase font-medium tracking-wider text-xs">
                                    Amount
                                </th>
                                <th className="px-6 py-3 text-gray-500 uppercase font-medium tracking-wider text-xs">
                                    
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        <tr key={"expense.id"}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {"expense.date"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {"expense.category"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {"expense.description"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ${"expense.amount"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-indigo-500">
                            <FaEdit />
                          </button>
                          <button className="ml-4 text-red-500">
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default ExpenseList;