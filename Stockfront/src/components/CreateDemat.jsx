import React, { useState } from "react";
import "../style/CreateDemat.css";
 
 

const brokers = [
  {
    "name": "Zerodha",
    "logo": "https://th.bing.com/th?id=OIP.K-iejz2_ZcuJI-jyqIr3UQAAAA&w=352&h=63&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    "video": "https://www.youtube.com/embed/Y__a4UxNU10?si=7RZTTgVLNHh9agFn",
    "signupLink": "https://zerodha.com/open-account",
    "loginLink": "https://kite.zerodha.com/",
    "description": "India's largest stockbroker with zero brokerage on equity delivery."
  },
  {
    "name": "Groww",
    "logo": "https://th.bing.com/th/id/OIP.4UfpbfTnUNdXlYzLVDmS1gHaCB?w=338&h=95&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "video": "https://www.youtube.com/embed/II8pBNWUU6g?si=tyfxCVYONfAgLiEZ",
    "signupLink": "https://groww.in/",
    "loginLink": "https://groww.in/login",
    "description": "Beginner-friendly platform with commission-free investments."
  },
  {
    "name": "Upstox",
    "logo": "https://th.bing.com/th/id/OIP.kVd42p1OWCPQEwXmD6L5IAHaCT?w=308&h=108&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "video": "https://www.youtube.com/embed/ntirjVFhkfI?si=aoBGM5DUqQQ0CPmS",
    "signupLink": "https://upstox.com/",
    "loginLink": "https://pro.upstox.com/",
    "description": "Low-cost trading with advanced charting tools."
  },
  {
    "name": "Angel One",
    "logo": "https://cio.eletsonline.com/wp-content/uploads/2021/10/AngelOne.jpg",
    "video": "https://www.youtube.com/embed/ugJD577TZPI?si=jeZwom6faK-xC5r9",
    "signupLink": "https://www.angelone.in/",
    "loginLink": "https://trade.angelone.in/",
    "description": "Full-service broker with AI-powered research."
  },
  {
    "name": "ICICI Direct",
    "logo": "https://th.bing.com/th/id/OIP.JguvEAPGE9PydIfb0IyKzQHaCB?rs=1&pid=ImgDetMain",
    "video": "https://www.youtube.com/embed/RMU-ZG6pvG8?si=rp6u2som6j0CV4K1",
    "signupLink": "https://www.icicidirect.com/",
    "loginLink": "https://secure.icicidirect.com/",
    "description": "3-in-1 account with ICICI Bank for seamless trading."
  },
  {
    "name": "5Paisa",
    "logo": "https://www.patrikajagat.com/wp-content/uploads/2020/07/5-paisa.jpg",
    "video": "https://www.youtube.com/embed/T783ImGSttw?si=TrWKHQ-Z46Vg9gD_",
    "signupLink": "https://www.5paisa.com/",
    "loginLink": "https://trade.5paisa.com/",
    "description": "Low-cost brokerage with research and advisory services."
  },
  {
    "name": "Fyers",
    "logo": "https://th.bing.com/th/id/OIP.jUATr-iOeK2RAKKSIB4OzAHaEK?rs=1&pid=ImgDetMain",
    "video": "https://www.youtube.com/embed/TYm9dz5XFTI",
    "signupLink": "https://login.fyers.in/",
    "loginLink": "https://fyers.in/login",
    "description": "Advanced charting and commission-free delivery trading."
  },
  {
    "name": "HDFC Securities",
    "logo": "https://www.hdfcsec.com/favicon.ico",
    "video": "https://www.youtube.com/embed/wGo-HWuAVuI?si=6JZCfEgXllAel4K7",
    "signupLink": "https://www.hdfcsec.com/",
    "loginLink": "https://ntrade.hdfcsec.com/",
    "description": "Trusted platform with banking-backed security."
  },
  {
    "name": "Sharekhan",
    "logo": "https://th.bing.com/th/id/OIP.KNEGfHak-JkG-B7Iu0lVYgAAAA?w=286&h=84&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "video": "https://www.youtube.com/embed/q4_dlTPAFBk?si=XU695LcSWMwp0EoL",
    "signupLink": "https://www.sharekhan.com/",
    "loginLink": "https://newtrade.sharekhan.com/",
    "description": "Offers in-depth research and trading tools."
  },
  {
    "name": "Motilal Oswal",
    "logo": "https://th.bing.com/th/id/OIP.pgt1rTZ4NOhejawbVqzIKwHaEU?w=309&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "video": "https://www.youtube.com/embed/hQkfgZrr-Ko?si=vTrs39pJ2xjfN7WK",
    "signupLink": "https://www.motilaloswal.com/",
    "loginLink": "https://invest.motilaloswal.com/",
    "description": "Comprehensive financial services with expert research."
  }
];




const CreateDematAccount = () => {
  const [selectedBrokers, setSelectedBrokers] = useState([]);
 
  const toggleBrokerSelection = (name) => {
    setSelectedBrokers((prev) =>
      prev.includes(name)
        ? prev.filter((broker) => broker !== name)
        : [...prev, name]
    );
  };

  return (
 
  
    <div className="create_body min-h-screen  p-9">
      <div className="flex justify-center items-center">
        <h1 className="text-white text-3xl font-bold flex items-center justify-center p-[30px]">Create Your Demat Account</h1>
      </div>

      <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {brokers.map((broker) => (
          <div key={broker.name} className="bg-white/70 p-4 rounded-xl shadow-lg">
            <img src={broker.logo} alt={broker.name} className="h-12 mb-4 mx-auto" />
            <h2 className="text-xl font-semibold">{broker.name}</h2>
            <p className="text-xl text-gray-600">{broker.description}</p>
            <div className="mt-3 flex justify-center ">
        <div className="w-[80%] h-[300px] bg-gray-100 rounded-lg shadow-md overflow-hidden">
          <iframe
            className="w-full h-full rounded-lg object-cover"
            src={broker.video}
            title={broker.name}
            allowFullScreen
          ></iframe>
        </div>
      </div>
               

<div className="flex justify-between mt-6">
  <a
    href={broker.signupLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="px-4 h-8 w-32 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition duration-300">
      Open Account
    </button>
  </a>

  <a
    href={broker.loginLink} 
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="px-4 py-2 h-8 w-32  bg-green-600 text-white font-semibold rounded-lg hover:bg-green-800 transition duration-300">
      Login
    </button>
  </a>
</div>

          </div>
        ))}
      </div>
    </div>
  
  );
};

export default CreateDematAccount;
