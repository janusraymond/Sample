"use client"; 
import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  // const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [savings, setSavings] = useState(0);
  const [interest, setInterest] = useState(0);
  const [display, setDisplay] = useState("");

  const deposit = () => {  // the curly brace opens a multiline function
    setSavings(savings + amount);
    setInterest(interest + (amount * .05));
    setAmount(0);
  };

  return (
    <div className="min-h-dvh flex flex-col justify-center items-center gap-4">
        <label htmlFor="amount">
          Enter Amount
        </label>
        <input
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          onFocus={() => setAmount(0)}
          type="number"
          value={amount}
          min={2}
          max={50}
          className="border-2 mb-2 border-gray-500  focus-visible:border-0 focus-visible:outline-2  rounded-md px-3 py-2 w-60 text-right"
          name="amount"
          required
        />

        <button
          onClick={deposit}
          className="bg-blue-500 hover:scale-95 transition-all duration-75 ease-in px-5 py-2 rounded-md text-white w-60">
          DEPOSIT
        </button>

        <div className="text-3xl">
          Account Information
        </div>

        <div className="text-2xl">
          Savings: 
          <label className="text-green-600">
            {savings.toFixed(2)} $COINS
          </label>
        </div>

        <div className="text-2xl">
          Interest: 
          <label className="text-blue-400">
            {interest.toFixed(2)} $COINS
          </label>
        </div>

        <button
          onClick={() => setDisplay("")}
          className="bg-green-500 hover:scale-95 transition-all duration-75 ease-in px-5 py-2 rounded-md text-white w-60">
          WITHDRAW INTEREST
        </button>

        <button
          onClick={() => setDisplay("")}
          className="bg-red-500 hover:scale-95 transition-all duration-75 ease-in px-5 py-2 rounded-md text-white w-60">
          CLOSE ACCOUNT
        </button>


        {/* <label htmlFor="department">
          Department
        </label>
        <input
          onChange={(e) => setDepartmentInput(e.target.value)}
          type="text"
          min={2}
          max={50}
          className="border-2 mb-2 border-gray-500 focus-visible:border-0 focus-visible:outline-2  rounded-md px-3 py-2 w-64"
          name="department"
          required
        />

        <div className="flex justify-end">
          <button
            onClick={() => setDisplay("You are " + nameInput + " from " + departmentInput + " department.")}
            className="bg-blue-500 hover:scale-95 transition-all duration-75 ease-in px-5 py-2 rounded-md text-white w-40">
            SHOW
          </button>
        </div>
        <div> {display} </div> */}
      </div>
    );
};



// <div className="min-h-dvh flex flex-col justify-center items-center gap-4">
//       <label htmlFor="name">
//         Name
//       </label>
//       <input
//         onChange={(e) => setNameInput(e.target.value)}
//         type="text"
//         min={2}
//         max={50}
//         className="border-2 mb-2 border-gray-500  focus-visible:border-0 focus-visible:outline-2  rounded-md px-3 py-2 w-64"
//         name="name"
//         id="text"
//         required
//       />

//       <label htmlFor="department">
//         Department
//       </label>
//       <input
//         onChange={(e) => setDepartmentInput(e.target.value)}
//         type="text"
//         min={2}
//         max={50}
//         className="border-2 mb-2 border-gray-500 focus-visible:border-0 focus-visible:outline-2  rounded-md px-3 py-2 w-64"
//         name="department"
//         id="text"
//         required
//       />

//       <div className="flex justify-end">
//         <button
//           onClick={() => setDisplay("You are " + nameInput + " from " + departmentInput + " department.")}
//           className="bg-blue-500 hover:scale-95 transition-all duration-75 ease-in px-5 py-2 rounded-md text-white w-40">
//           SHOW
//         </button>
//       </div>
//       <div> {display} </div>
//     </div>









      {/* <div className ="text-3xl">COUNTER APPLICATION</div>
      <div>
        NAME: <input type="text" name = "name" className="border-2 border-blue-600 onChange = {(event)=> setNameInput(event.target.value)}"/>
      </div>
      <div>
        DEPARTMENT: <input type="text" className="border-2 border-blue-600"/>
      </div>

      <div className="flex gap-2 justify-center"> */}
        {/* <button
          onClick={(event) => setNameInput(event.target.value)}
          className="p-4 bg-green-400">
          INCREASE
        </button> */}

        {/* <button
          onClick={() => setCount(count - 1)}
          className="p-4 bg-red-400">
          DECREASE
        </button>

        <button
          onClick={() => setCount(0)}
          className="p-4 bg-neutral-400">
          RESET
        </button>

        <Link href="/1"
          className="p-4 bg-yellow-400">
          Go to page 1
        </Link> */}
      {/* </div> */}
      {/* <div>{count}</div> */}

      {/* <div>{nameInput}</div> */}

