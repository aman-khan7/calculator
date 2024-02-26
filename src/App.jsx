import { useState } from "react";
import bgImage from "./assets/background.jpg";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondtNumber, setSecondNumber] = useState("");
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
            <div className="rounded-full border border-gray-500 p-4 h-32 w-32  ">
              <div className="min-h-px w-full bg-gray-900" />
            </div>
          </div>

          <input
            className="px-4 py-2 border border-black w-full rounded-sm"
            placeholder="enter second number"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
