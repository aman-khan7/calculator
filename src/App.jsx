import { useState } from "react";
import bgImage from "./assets/background.jpg";

const signs = [
  {
    symbol: "+",
    border: "border-r border-b",
    rounded: "rounded-tl-full",
  },
  {
    symbol: "-",
    border: "border-l border-b",
    rounded: "rounded-tr-full",
  },
  {
    symbol: "*",
    border: "border-t border-r",
    rounded: "rounded-bl-full",
  },
  {
    symbol: "÷",
    border: "border-t border-l",
    rounded: "rounded-br-full",
  },
];

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondtNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  return (
    <div
      className="min-h-screen min-w-full bg-center bg-no-repeat bg-cover flex justify-center items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-white min-w-[400px] p-4 n shadow-2xl flex flex-col gap-4 border border-gray-600">
        <div className="flex justify-between border border-green-950 px-6 py-4 rounded-md bg-gray-500/50">
          <span>result</span> <span>{result}</span>
        </div>
        <div className="flex flex-col gap-4">
          <input
            className="px-4 py-2 border border-black w-full rounded-sm"
            placeholder="enter first number"
            onChange={(e) => {
              setFirstNumber(e.target.value || "");
            }}
          />
          <div className="flex justify-center">
            {signs.map((sign) => {
              return (
                <div
                  key={sign.symbol}
                  className={`flex justify-center items-center ${sign.border} border-black/40`}
                >
                  <div
                    className={`${
                      operator === sign.symbol
                        ? "bg-blue-700 text-white"
                        : "hover:bg-green-700/50"
                    }  ${
                      sign.rounded
                    } text-2xl cursor-pointer w-full h-full flex justify-center items-center`}
                    onClick={() => {
                      setOperator(sign.symbol);
                    }}
                  >
                    <span className="-rotate-45">{sign.symbol}</span>
                  </div>
                </div>
              );
            })}
            <div className="rounded-full border border-gray-500  p-1 h-32 w-32  grid grid-cols-2 rotate-45"></div>
          </div>

          <input
            className="px-4 py-2 border border-black w-full rounded-sm"
            placeholder="enter second number"
            onChange={(e) => {
              setSecondNumber(e.target.value || "");
            }}
          />
        </div>
        <button
          onClick={() => {
            const a = Number(firstNumber || 0);
            const b = Number(secondtNumber || 0);

            if (operator === "+") {
              setResult(String(a + b));
            } else if (operator === "-") {
              setResult(String(a - b));
            } else if (operator === "*") {
              setResult(String(a * b));
            } else {
              setResult(String(a / b));
            }
          }}
          className="bg-black py-4 text-white uppercase"
        >
          done
        </button>
      </div>
    </div>
  );
}

export default App;
// /*
// (1) one we use react because
// (i) reusable components example navigation bar,fancy button to use through out app
// (like function thats return html)

// (2) react is declatrative (tajurba wala worker) we modified states leave the redndaring to react
// (3) to use react we make components where a components is
// (i) a javascript function that return some html,string,null e.t.c
// (j) a javascript class that implements render methode

// */
