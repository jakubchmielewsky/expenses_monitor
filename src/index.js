import React from 'react';
import ReactDOM from 'react-dom/client';
import ExpensesMonitoringApp from './ExpensesMonitoringApp';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExpensesMonitoringApp />
  </React.StrictMode>
);
