"use client"; 
import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  // const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [savings, setSavings] = useState(0);
  const [interest, setInterest] = useState(0);

  const deposit = () => {  // the curly brace opens a multiline function
    setSavings(savings + amount);
    setInterest(interest + (amount * .05));
    setAmount(0);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-3xl">
          <div className="grid grid-cols-2 gap-6">
            <div>
                <label htmlFor="amount" className="block text-2xl">ENTER AMOUNT</label>
                <input 
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  onFocus={(e) => e.target.value = ""}
                  value={amount}
                  type="number" 
                  name="amount" 
                  className="w-full border rounded-lg p-2 mb-4 focus:outline-none focus:ring focus:ring-blue-300 text-right">
                </input>
                
                <button
                  onClick={deposit}
                  className="w-full bg-blue-500 hover:scale-95 transition-all duration-75 ease-in px-5 py-2 rounded-md text-white">
                  DEPOSIT
                </button>
            </div>
            
            <div className="grid grid-cols-1 gap-6 flex items-center justify-center">
                <label className="block text-3xl font-bold">Account Information</label>

                <div className="text-2xl">
                  SAVINGS: &nbsp;
                  <label className="text-green-600">
                    $ {savings.toFixed(2)} COINS
                  </label>
                </div>

                <div className="text-2xl">
                  INTEREST: &nbsp;
                  <label className="text-blue-600">
                    $ {interest.toFixed(2)} COINS
                  </label>
                </div>
                
                <button 
                    className="w-full bg-green-500 hover:scale-95 transition-all duration-75 ease-in px-5 py-2 rounded-md text-white">
                    WITHDRAW
                </button>
                <button 
                    className="w-full bg-red-500 hover:scale-95 transition-all duration-75 ease-in px-5 py-2 rounded-md text-white">
                    CLOSE ACCOUNT
                </button>
            </div>
          </div>
      </div>
    </div>
    );
};
