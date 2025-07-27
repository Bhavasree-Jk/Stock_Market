import React, { useState, useEffect } from "react";
import "../style/Budget.css";

const Budget = () => {
  const [budget, setBudget] = useState({ id: 1, budgetAmount: 5000 });
  const [expenses, setExpenses] = useState([]);
  const [newBudgetAmount, setNewBudgetAmount] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [expenseInputs, setExpenseInputs] = useState([{ name: "", amount: "" }]);

  const handleEditBudget = () => {
    if (!newBudgetAmount) return;
    setBudget({ ...budget, budgetAmount: parseFloat(newBudgetAmount) });
    setIsEditing(false);
    setNewBudgetAmount("");
  };

  const handleExpenseSubmit = () => {
    const isValid = expenseInputs.every(
      (expense) => expense.name.trim() !== "" && expense.amount.trim() !== ""
    );
    if (!isValid) {
      alert("Please fill in all fields before saving.");
      return;
    }

    const newExpenses = expenseInputs.map((expense) => ({
      id: Date.now() + Math.random(), // unique id
      ...expense,
      time: new Date().toLocaleString(),
    }));

    setExpenses((prev) => [...prev, ...newExpenses]);
    setExpenseInputs([{ name: "", amount: "" }]);
    setShowExpenseForm(false);
  };

  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <div className="budget-container">
      <h2 className="title">Budget</h2>
      {budget && (
        <div className="budget-section">
          <p className="budget-amount">Budget Amount: ₹{budget.budgetAmount}</p>
          {isEditing ? (
            <div>
              <input
                type="number"
                value={newBudgetAmount}
                onChange={(e) => setNewBudgetAmount(e.target.value)}
                className="input-field"
              />
              <button onClick={handleEditBudget} className="save-btn">Save</button>
              <button onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
            </div>
          ) : (
            <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
          )}
        </div>
      )}

      <h2 className="title">Expenses</h2>
      <button onClick={() => setShowExpenseForm(true)} className="add-expense-btn">Add Expense</button>

      {showExpenseForm && (
        <div className="expense-form">
          {expenseInputs.map((expense, index) => (
            <div key={index} className="expense-input-group">
              <input
                type="text"
                placeholder="Expense Name"
                value={expense.name}
                onChange={(e) => {
                  const updated = [...expenseInputs];
                  updated[index].name = e.target.value;
                  setExpenseInputs(updated);
                }}
                className="input-field"
              />
              <input
                type="number"
                placeholder="Amount"
                value={expense.amount}
                onChange={(e) => {
                  const updated = [...expenseInputs];
                  updated[index].amount = e.target.value;
                  setExpenseInputs(updated);
                }}
                className="input-field"
              />
              {index === expenseInputs.length - 1 && (
                <button onClick={() => setExpenseInputs([...expenseInputs, { name: "", amount: "" }])} className="add-btn">+</button>
              )}
            </div>
          ))}
          <button onClick={handleExpenseSubmit} className="save-btn">Save Expenses</button>
          <button onClick={() => setShowExpenseForm(false)} className="cancel-btn">Cancel</button>
        </div>
      )}

      <table className="expense-table">
        <thead>
          <tr>
            <th>Expense Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>₹{expense.amount}</td>
              <td>{expense.time}</td>
              <td>
                <button onClick={() => handleDeleteExpense(expense.id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Budget;
