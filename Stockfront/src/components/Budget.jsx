import React, { useState, useEffect } from "react";
import { fetchBudget, editBudget, fetchExpenses, addExpense, deleteExpense } from "../api/api";
import "../style/Budget.css";


const Budget = () => {
  const [budget, setBudget] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [newBudgetAmount, setNewBudgetAmount] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [expenseInputs, setExpenseInputs] = useState([{ name: "", amount: "" }]);

  useEffect(() => {
    loadBudget();
    loadExpenses();
  }, []);

  const loadBudget = async () => {
    try {
      const data = await fetchBudget();
      setBudget(data);
    } catch (error) {
      console.error("Failed to fetch budget:", error);
    }
  };

  const loadExpenses = async () => {
    try {
      const data = await fetchExpenses();
      setExpenses(data);
    } catch (error) {
      console.error("Failed to fetch expenses:", error);
    }
  };

  const handleEditBudget = async () => {
    try {
      const updatedBudget = await editBudget(budget.id, parseFloat(newBudgetAmount));
      setBudget({ ...budget, budgetAmount: updatedBudget.budgetAmount });
      setIsEditing(false);
      setNewBudgetAmount("");
    } catch (error) {
      console.error("Error updating budget:", error);
    }
  };

  const handleExpenseSubmit = async () => {
    const isValid = expenseInputs.every(expense => expense.name.trim() !== "" && expense.amount.trim() !== "");
    if (!isValid) {
      alert("Please fill in all fields before saving.");
      return;
    }
    try {
      const expensesWithTime = expenseInputs.map(expense => ({
        ...expense,
        time: new Date().toLocaleString(),
      }));
      await Promise.all(expensesWithTime.map(expense => addExpense(expense)));
      loadExpenses();
      setExpenseInputs([{ name: "", amount: "" }]);
      setShowExpenseForm(false);
    } catch (error) {
      console.error("Failed to save expenses:", error.message);
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      await deleteExpense(id);
      setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== id));
    } catch (error) {
      console.error("Failed to delete expense:", error);
    }
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
                  const updatedInputs = [...expenseInputs];
                  updatedInputs[index].name = e.target.value;
                  setExpenseInputs(updatedInputs);
                }}
                className="input-field"
              />
              <input
                type="number"
                placeholder="Amount"
                value={expense.amount}
                onChange={(e) => {
                  const updatedInputs = [...expenseInputs];
                  updatedInputs[index].amount = e.target.value;
                  setExpenseInputs(updatedInputs);
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
              <td>{expense.time || "N/A"}</td>
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