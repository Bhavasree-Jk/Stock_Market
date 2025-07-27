import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import Portfolio from './components/Portfolio';
import CompaniesCatlog from './components/CompaniesCatlog';
import DematAccount from './components/DematAccount';
import CreateDemat from './components/CreateDemat';
import Learn from './components/Learn';
import Budget from './components/Budget';
import Dashboard from './components/Dashboard';   // ✅ Import Dashboard
//import Market from './components/Market';         // ✅ Import Market

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/catlog" element={<CompaniesCatlog />} />
        <Route path="/demataccount" element={<DematAccount />} />
        <Route path="/createdemat" element={<CreateDemat />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/dashboard" element={<Dashboard />} />  {/* ✅ Fix */}
       
      </Routes>
    </Router>
  );
};

export default App;
