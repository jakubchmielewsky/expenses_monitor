import React from "react";

//icons
import {FaFileExport} from "react-icons/fa"

const ExpensesSummary = () => {
    return(
        <div className="bg-white shadow rounded-lg">
            <div className="py-5 px-4">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Expenses Summary</h2>
                <div className="w-full inline-flex justify-between items-center">
                    <p className="text-xl font-semibold text-gray-900">Total: {"100"}$</p>
                    <button className="inline-flex items-center text-indigo-700 bg-indigo-100 gap-2 px-6 py-2 text-medium rounded-lg">
                        <FaFileExport/>
                        Export
                    </button>
                </div>
                <p className="mt-2 font-medium">Chart View</p>
                <select name="chart view" className="w-full border-gray-300 shadow rounded-lg outline-none pl-3 pt-2 focus:">
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesSummary;