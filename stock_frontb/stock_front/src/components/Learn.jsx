import React, { useState } from "react";
import Navbar from "./Navbar";
import "../style/Learn.css";

const Learn = () => {
  const [activeTab, setActiveTab] = useState("videos");

  const videos = [
    { title: "Stock Market Basics", id: "x0G4WtO0LCQ" },
    { title: "How to Invest in Stocks", id: "tmryHfunyQ4" },
    { title: "Understanding Stock Charts", id: "lNdOtlpmH5U" },
    { title: "What is an IPO?", id: "8zWQ9aXmeaY" },
    { title: "Best Investment Strategies", id: "vrQ584TCVko" },
    { title: "Common Mistakes to Avoid", id: "ZCFkWDdmXG8" },
  ];

  const faqs = [
    { question: "What is stock investment?", answer: "Stock investment refers to buying shares of a company to gain profits through dividends or price appreciation." },
    { question: "How do I start investing?", answer: "You can start investing by opening a brokerage account, researching stocks, and diversifying your portfolio." },
    { question: "What are the risks involved?", answer: "Stock investments come with risks such as market volatility, economic downturns, and company-specific risks." },
    { question: "What is the difference between stocks and bonds?", answer: "Stocks represent ownership in a company, while bonds are loans given to companies or governments with fixed interest returns." },
    { question: "How does market timing affect investing?", answer: "Market timing involves predicting stock movements, but long-term investments usually yield better results than short-term speculation." },
    { question: "What are mutual funds?", answer: "Mutual funds pool money from many investors to buy a diversified portfolio of stocks, bonds, or other securities." },
  ];

  const blogs = [
    { title: "Stock Market Trends 2024", content: "Stay updated with the latest market trends...", link: "https://equityechoes.co.in/indian-stock-market-2024-performance-and-2025-outlook/" },
    { title: "Beginner's Guide to Investing", content: "A step-by-step guide for beginners...", link: "https://www.nerdwallet.com/article/investing/how-to-invest-in-stocks" },
    { title: "Top 5 Investment Strategies", content: "Learn effective strategies for maximizing returns...", link: "https://www.investopedia.com/investing-strategies-5189883" },
    { title: "Risk Management in Stock Trading", content: "Understand how to minimize risks in stock trading...", link: "https://www.forbes.com/advisor/investing/stock-market-risk-management/" },
  ];

  return (
    <>
      <div className="learn-body min-h-screen">
        <Navbar />
        <div className="learn-content mt-[80px] mx-auto p-6 space-y-8">
          {/* Tabs Section */}
          <div className="flex h-[50px] justify-center space-x-4 pb-3">
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-4 py-2 w-[80px] rounded-md ${activeTab === "videos" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              Videos
            </button>
            <button
              onClick={() => setActiveTab("blogs")}
              className={`px-4 py-2 w-[80px] rounded-md ${activeTab === "blogs" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              Blogs
            </button>
            <button
              onClick={() => setActiveTab("qna")}
              className={`px-4 py-2 w-[80px] rounded-md ${activeTab === "qna" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              Q&A
            </button>
          </div>

          {/* Videos Section */}
          {activeTab === "videos" && (
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 mt-[10px] text-white">Stock Investment Videos</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                  <a
                    key={index}
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      className="w-full rounded-lg shadow-lg"
                    />
                    <p className="mt-2 text-white font-semibold">{video.title}</p>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Blogs Section */}
          {activeTab === "blogs" && (
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-white">Latest Investment Blogs</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-md h-[150px]">
                    <h4 className="font-semibold text-lg">{blog.title}</h4>
                    <p className="text-gray-600">{blog.content}</p>
                    <a href={blog.link} className="text-blue-500 font-semibold hover:underline">
                      Read More
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Q&A Section */}
          {activeTab === "qna" && (
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-white">Knowledge Key Notes</h3>
              <div className="flex flex-col items-center space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="w-full md:w-2/3 p-6 bg-white shadow-md text-center">
                    <h4 className="font-semibold text-lg text-blue-600">{faq.question}</h4>
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Learn;
