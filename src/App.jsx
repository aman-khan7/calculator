import { useState } from "react";
import bgImage from "./assets/background.jpg";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondtNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  return (
    <div
      className="min-h-screen min-w-full bg-center bg-no-repeat bg-cover flex justify-center items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-white min-w-[400px] p-4 rounded-lg shadow-2xl flex flex-col gap-4 border border-gray-600">
        <div className="border border-green-950 px-6 py-4 rounded-md bg-gray-500/50">
          jji
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
            <div className="rounded-full border border-gray-500  p-1 h-32 w-32  grid grid-cols-2 rotate-45">
              <div className="flex justify-center items-center border-r border-b border-black/40">
                <div
                  className={`${
                    operator === "+"
                      ? "bg-blue-700 text-white"
                      : "hover:bg-gray-700/50"
                  }  rounded-tl-full text-2xl cursor-pointer w-full h-full flex justify-center items-center`}
                  onClick={() => {
                    setOperator("+");
                  }}
                >
                  <span className="-rotate-45">+</span>
                </div>
              </div>

              <div className="flex justify-center items-center border-l border-b border-black/40">
                <div
                  className={`${
                    operator === "-"
                      ? "bg-blue-700 text-white"
                      : "hover:bg-gray-700/50"
                  }  text-2xl  rounded-tr-full  cursor-pointer w-full h-full flex justify-center items-center`}
                  onClick={() => {
                    setOperator("-");
                  }}
                >
                  <span className="-rotate-45">-</span>
                </div>
              </div>
              <div className="flex justify-center items-center border-t border-r border-black/40">
                <div
                  className={`${
                    operator === "*"
                      ? "bg-blue-700 text-white"
                      : "hover:bg-gray-700/50"
                  } text-2xl   rounded-bl-full cursor-pointer -  w-full h-full flex justify-center items-center`}
                  onClick={() => {
                    setOperator("*");
                  }}
                >
                  <span className="-rotate-45">*</span>
                </div>
              </div>
              <div className="flex justify-center items-center border-t border-l border-black/40">
                <div
                  className={`${
                    operator === "÷"
                      ? "bg-blue-700 text-white"
                      : "hover:bg-gray-700/50"
                  } text-2xl  rounded-br-full  cursor-pointer -  w-full h-full flex justify-center items-center`}
                  onClick={() => {
                    setOperator("÷");
                  }}
                >
                  <span className="-rotate-45">÷</span>
                </div>
              </div>
            </div>
          </div>

          <input
            className="px-4 py-2 border border-black w-full rounded-sm"
            placeholder="enter second number"
            onChange={(e) => {
              setSecondNumber(e.target.value || "");
            }}
          />
        </div>
        <button>done</button>
      </div>
    </div>
  );
}

export default App;
