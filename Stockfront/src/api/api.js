import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api"; 

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/register`, userData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    throw error;
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/login`, loginData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};

// 📌 STOCK FUNCTIONS
export const fetchStocks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/stocks`);
    return response.data;
  } catch (error) {
    console.error("Error fetching stocks:", error.response?.data || error.message);
    throw error;
  }
};

export const addStock = async (stockData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/stocks`, stockData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding stock:", error.response?.data || error.message);
    throw error;
  }
};

export const deleteStock = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/stocks/${id}`);
  } catch (error) {
    console.error("Error deleting stock:", error.response?.data || error.message);
    throw error;
  }
};

// 📌 BUDGET & EXPENSE FUNCTIONS

export const fetchExpenses = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/expenses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching expenses:", error.response?.data || error.message);
    throw error;
  }
};

export const fetchBudget = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/budget`);
    return response.data;
  } catch (error) {
    console.error("Error fetching budget:", error.response?.data || error.message);
    throw error;
  }
};

// 🔹 FIXED: `editBudget` accepts `id` & `amount` separately
export const editBudget = async (id, amount) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/budget/${id}`, { budgetAmount: amount }, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error editing budget:", error.response?.data || error.message);
    throw error;
  }
};

export const addExpense = async (expenseData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/expenses`, expenseData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding expense:", error.response?.data || error.message);
    throw error;
  }
};

export const deleteExpense = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/expenses/${id}`);
  } catch (error) {
    console.error("Error deleting expense:", error.response?.data || error.message);
    throw error;
  }
};
