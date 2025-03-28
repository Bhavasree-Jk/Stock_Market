import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/DematAccount.css";
import Navbar from "./Navbar";

const DematAccount = () => {
  const navigate = useNavigate();
  const [hasAccount, setHasAccount] = useState(null);

  return (
    <>
    <Navbar/>
    <div className="account_body flex items-center justify-center h-screen text-center">
      <div className="bg-white h-[200px] p-10 rounded-2xl shadow-2xl w-[90%] sm:w-[60%] md:w-[40%]">
        <h2 className="text-3xl font-bold mb-6  ">
          Do you have a Demat account?
        </h2>

        <div className="flex justify-center gap-6">
          <button
            className="px-8 py-3 h-10 w-17 text-lg font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl transition-all duration-300 shadow-md"
            onClick={() => setHasAccount(true)}
          >
            Yes
          </button>
          <button
            className="px-8 py-3 h-10 w-17 text-lg font-semibold text-white bg-red-500 hover:bg-red-600 rounded-xl transition-all duration-300 shadow-md"
            onClick={() => setHasAccount(false)}
          >
            No
          </button>
        </div>

        {hasAccount !== null && (
          <button
            className={`mt-10 px-8 h-14 w-45 py-3 text-lg font-semibold text-white rounded-xl transition-all duration-300 shadow-md ${
              hasAccount ? "bg-blue-500 hover:bg-blue-600" : "bg-orange-500 hover:bg-orange-600"
            }`}
            onClick={() => navigate(hasAccount ? "/portfolio" : "/createdemat")}
          >
            {hasAccount ? "Buy Stocks" : "Create Demat Account"}
          </button>
        )}
      </div>
    </div>
    </>
  );
};

export default DematAccount;
