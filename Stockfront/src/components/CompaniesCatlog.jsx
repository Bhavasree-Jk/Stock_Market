import { useState } from "react";
import "../style/CompaniesCatlog.css"; // Import the CSS file
import Navbar from "./Navbar";



const nseCompanies = [
  "Tata Consultancy Services", "Reliance Industries", "Infosys", "HDFC Bank", "ICICI Bank",
  "Hindustan Unilever", "Bharti Airtel", "Kotak Mahindra Bank", "State Bank of India", "Bajaj Finance",
  "Asian Paints", "Wipro", "HCL Technologies", "Nestle India", "Larsen & Toubro",
  "Mahindra & Mahindra", "Tech Mahindra", "Titan Company", "Maruti Suzuki", "Sun Pharma",
  "Power Grid Corporation", "UltraTech Cement", "NTPC", "Tata Steel", "Oil & Natural Gas Corporation",
  "IndusInd Bank", "Bharat Petroleum", "JSW Steel", "Cipla", "Bajaj Auto",
  "Grasim Industries", "Dr. Reddy's Laboratories", "Hero MotoCorp", "Divi's Laboratories", "Tata Motors",
  "Adani Enterprises", "Adani Green Energy", "Adani Ports", "Bajaj Holdings", "Eicher Motors",
  "HDFC Life", "Hindalco Industries", "IOC", "ITC", "Lupin",
  "Pidilite Industries", "Siemens India", "Tata Power", "UPL", "Vedanta"
];

const bseCompanies = [
  "Reliance Industries", "Tata Motors", "HDFC Bank", "ICICI Bank", "L&T",
  "State Bank of India", "Bharti Airtel", "Maruti Suzuki", "Tata Steel", "Wipro",
  "Infosys", "Hindustan Unilever", "Sun Pharma", "Tech Mahindra", "Asian Paints",
  "Bajaj Finance", "UltraTech Cement", "Grasim Industries", "Dr. Reddy's", "JSW Steel",
  "IndusInd Bank", "Mahindra & Mahindra", "Power Grid Corp", "Tata Power", "Bajaj Auto",
  "Nestle India", "Lupin", "Siemens India", "UPL", "Vedanta"
];

const StockExchange = () => {
  const [exchange, setExchange] = useState("NSE");

  const generateDummyData = (companies) => {
    return companies.map((company, index) => ({
      id: index + 1,
      company,
      marketCap: `${(Math.random() * 1000).toFixed(2)} Cr`,
      peRatio: (Math.random() * 50).toFixed(2),
      roe: `${(Math.random() * 30).toFixed(2)}%`,
      weekHighLow: `${(Math.random() * 5000).toFixed(2)} / ${(Math.random() * 4000).toFixed(2)}`,
    }));
  };

  const data = exchange === "NSE" ? generateDummyData(nseCompanies) : generateDummyData(bseCompanies);

  return (<>
   

   <div  className="company-class">
   <Navbar/>
     <div className="Companies-page">
     
     <div className="button-group">
       <button onClick={() => setExchange("NSE")} className="btn nse-btn">
         NSE
       </button>
       <button onClick={() => setExchange("BSE")} className="btn bse-btn">
         BSE
       </button>
     </div>

     <div className="details">
       <h2>{exchange} Companies</h2>
       <table>
         <thead>
           <tr>
             <th>SI. No</th>
             <th>Company</th>
             <th>Market Cap</th>
             <th>P/E Ratio</th>
             <th>ROE</th>
             <th>52-Week High/Low</th>
           </tr>
         </thead>
         <tbody>
           {data.map((row) => (
             <tr key={row.id}>
               <td>{row.id}</td>
             <td><a href="">{row.company}</a></td>
               <td>{row.marketCap}</td>
               <td>{row.peRatio}</td>
               <td>{row.roe}</td>
               <td>{row.weekHighLow}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   </div> 

   </div>


    
  </>
    
  );
};

export default StockExchange;
