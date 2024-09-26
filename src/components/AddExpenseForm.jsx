import React from "react";

const AddExpenseForm = () => {
    return(
        <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Add new expense</h2>
                <form onSubmit={"handleSubmit"}>
                    <div className="grid grid-cols-1 gap-y-6 gap-x-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Amount</label>
                            <div className="mt-1">
                                <input 
                                    type="text"
                                    value={""} 
                                    onChange={""}
                                    className="shadow-sm w-full block focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddExpenseForm;