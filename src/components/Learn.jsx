import React, { useState } from "react";
import Navbar from "./Navbar";
import '../style/Learn.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Learn = () => {
  const [activeTab, setActiveTab] = useState("videos");
  const [quizStarted, setQuizStarted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const videos = [
    "https://www.youtube.com/embed/x0G4WtO0LCQ?si=ISIa4dYOTnoOFsmj",
    "https://www.youtube.com/embed/tmryHfunyQ4?si=5370auMg-fCcbNSN",
    "https://www.youtube.com/embed/lNdOtlpmH5U?si=h86MERz2eKYDHpHr",
    "https://www.youtube.com/embed/8zWQ9aXmeaY?si=b7oep750FTvDw9f0",
    "https://www.youtube.com/embed/vrQ584TCVko?si=U-xhJHkXdIBm6fIU",
    "https://www.youtube.com/embed/ZCFkWDdmXG8?si=K4e_Znwb1vpED4sd"
  ];

  const blogs = [
    { title: "Stock Market Trends 2024", content: "Stay updated with the latest market trends and expert insights...", link: "https://equityechoes.co.in/indian-stock-market-2024-performance-and-2025-outlook/" },
    { title: "Beginner's Guide to Investing", content: "A step-by-step guide to help beginners understand stock investments...", link: "https://www.nerdwallet.com/article/investing/how-to-invest-in-stocks" },
    { title: "How to Diversify Your Portfolio", content: "Learn why diversification is key to risk management and long-term success...", link: "https://www.forbes.com/advisor/investing/stock-market-basics/" },
    { title: "Understanding Stock Market Indicators", content: "Discover key indicators that can help you make better investment decisions...", link: "https://www.stockguru.in/trading-guide/best-shares-to-buy-today.jsp" },
    { title: "Top 5 Investment Strategies for 2024", content: "Explore effective strategies to maximize returns in the upcoming year...", link: "https://www.motilaloswal.com/learning-centre/2024/3/five-strategies-for-profitable-investments-in-2024" },
    { title: "Common Mistakes to Avoid in Stock Investing", content: "Avoid these pitfalls to ensure a successful investment journey...", link: "https://www.investopedia.com/articles/stocks/07/beat_the_mistakes.asp" }
  ];
  
  const questions = [
    { id: 1, question: "What is a stock?", options: ["A loan to a company", "A share in a company", "A type of bond"], correct: "A share in a company" },
    { id: 2, question: "What does IPO stand for?", options: ["Initial Public Offering", "International Portfolio Option", "Investment Private Organization"], correct: "Initial Public Offering" },
    { id: 3, question: "Which market index tracks the top 30 companies in India?", options: ["NIFTY 50", "BSE Sensex", "Dow Jones"], correct: "BSE Sensex" },
    { id: 4, question: "Which is NOT a type of financial market?", options: ["Stock Market", "Commodity Market", "Automobile Market"], correct: "Automobile Market" },
    { id: 5, question: "What is the purpose of a mutual fund?", options: ["To invest in multiple assets", "To trade cryptocurrencies", "To give loans"], correct: "To invest in multiple assets" },
    { id: 6, question: "Who regulates the stock market in India?", options: ["RBI", "SEBI", "IMF"], correct: "SEBI" },
    { id: 7, question: "What does P/E ratio stand for?", options: ["Profit/Earnings", "Price/Earnings", "Portfolio/Equity"], correct: "Price/Earnings" },
    { id: 8, question: "Which factor affects stock prices the most?", options: ["Weather", "Company Performance", "Population Growth"], correct: "Company Performance" },
    { id: 9, question: "What is a dividend?", options: ["A company's profit shared with shareholders", "A type of tax", "A government fund"], correct: "A company's profit shared with shareholders" },
    { id: 10, question: "What does a bullish market indicate?", options: ["Prices are rising", "Prices are falling", "Market is unstable"], correct: "Prices are rising" }
  ];

 const handleAnswerChange = (id, answer) => {
    setAnswers({ ...answers, [id]: answer });
  };

  const handleSubmitQuiz = () => {
    let correctAnswers = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) correctAnswers++;
    });
    setScore(correctAnswers);
    toast.success(`Quiz submitted! You scored ${correctAnswers} out of ${questions.length}.`);
  };

  return (
    <div className="learn-body min-h-screen">
      <Navbar />
      <div className="learn-content mt-[80px] mx-auto p-6 space-y-8">
        <div className="flex h-[50px] justify-center space-x-4 pb-3">
          <button onClick={() => setActiveTab("videos")} className={`px-4 py-2 w-[80px] rounded-md ${activeTab === "videos" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}>Videos</button>
          <button onClick={() => setActiveTab("blogs")} className={`px-4 py-2 w-[80px] rounded-md ${activeTab === "blogs" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}>Blogs</button>
          <button onClick={() => setActiveTab("quiz")} className={`px-4 py-2 w-[80px] rounded-md ${activeTab === "quiz" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}>Quiz</button>
        </div>

        {activeTab === "videos" && (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 mt-[10px]">Stock Investment Videos</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div key={index} className="w-full h-60">
                  <iframe className="w-full h-full rounded-lg shadow-lg" src={video} title={`Stock Investment Video ${index + 1}`} allowFullScreen></iframe>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "blogs" && (
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-white">Latest Investment Blogs</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-md h-[150px]">
                  <h4 className="font-semibold text-lg">{blog.title}</h4>
                  <p className="text-gray-600">{blog.content}</p>
                  <a href={blog.link} className="text-blue-500 font-semibold hover:underline">Read More</a>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "quiz" && (
          <div className="quiz-section card ">
          <h2 className="text-2xl font-bold mb-4 text-black">Test Your Knowledge</h2>

            {!quizStarted ? (
              <button className="btn btn-primary" onClick={() => setQuizStarted(true)}>Start Quiz</button>
            ) : (
              <div className="quiz-container">
                {questions.map(q => (
                  <div key={q.id} className="quiz-question p-4">
                    <p className="font-semibold">{q.question}</p>
                    {q.options.map(opt => (
                      <label key={opt} className="quiz-option flex items-center space-x-2">
                        <input type="radio" name={`question-${q.id}`} value={opt} onChange={() => handleAnswerChange(q.id, opt)} />
                        {opt}
                      </label>
                    ))}
                  </div>
                ))}
                <button className="btn btn-primary mt-4" onClick={handleSubmitQuiz}>Submit Quiz</button>
                {score !== null && (
                  <div className="quiz-result mt-4 font-bold">Your Score: {score} / {questions.length}</div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Learn;
