import React, {useState} from "react";

//icons
import {FaFileExport} from "react-icons/fa"
import {useExpenses} from "../hooks/useExpenses";

//chart
import {Bar} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpensesSummary = () => {

  const {expenses} = useExpenses();
  const [chartView,
    setChartView] = useState("daily");

  const totalExpenses = expenses.reduce((total, expense) => total + Number(expense.amount), 0);

  const aggregateExpenses = () => {
    const aggregated = {};
    expenses.forEach(expense => {
      let key;
      switch (chartView) {
        case "daily":
          key = expense.date;
          break;
        case "monthly":
          key = expense
            .date
            .substring(0, 7);
          break;
        default:
          key = expense.date;
      }

      if (!aggregated[key]) {
        aggregated[key] = {};
      }
      if (!aggregated[key][expense.category]) {
        aggregated[key][expense.category] = 0;
      }
      aggregated[key][expense.category] += Number(expense.amount);
    });
    return aggregated;
  }


  const chartData = {
    labels: Object.keys(aggregateExpenses()),
    datasets: [
      {
        label: "Food",
        data: Object
          .values(aggregateExpenses())
          .map((day) => day.Food || 0),
        backgroundColor: "rgba(255, 99, 132, 0.8)"
      }, {
        label: "Transport",
        data: Object
          .values(aggregateExpenses())
          .map((day) => day.Transport || 0),
        backgroundColor: "rgba(54, 162, 235, 0.8)"
      }, {
        label: "Entertainment",
        data: Object
          .values(aggregateExpenses())
          .map((day) => day.Entertainment || 0),
        backgroundColor: "rgba(75, 192, 192, 0.8)"
      }, {
        label: "Other",
        data: Object
          .values(aggregateExpenses())
          .map((day) => day.Other || 0),
        backgroundColor: "rgba(153, 102, 255, 0.8)"
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  };

  const handleChartViewChange = (e) => {
    setChartView(e.target.value);
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="py-5 px-4">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Expenses Summary</h2>
        <div className="w-full inline-flex justify-between items-center">
          <p className="text-xl font-semibold text-gray-900">Total: {totalExpenses}$</p>
          <button
            className="inline-flex items-center text-indigo-700 bg-indigo-100 gap-2 px-6 py-2 text-medium rounded-lg">
            <FaFileExport/>
            Export
          </button>
        </div>
        <p className="mt-2 font-medium">Chart View</p>
        <select
          name="chart view"
          className="w-full border-gray-300 shadow rounded-lg outline-none pl-3 pt-2 focus:"
          onChange={handleChartViewChange}>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
        </select>

        <div className="overflow-x-auto mt-2 h-64">
          <div className="min-w-[500px]  w-full h-full">
            <Bar data={chartData} options={chartOptions}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpensesSummary;