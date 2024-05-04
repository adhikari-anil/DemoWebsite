import React from "react";

function Chat2() {
  return (
    <div className=" w-1/2 h-12 flex flex-row relative left-10 top-10 border-3 rounded-lg">
      <div className="w-fit">
        <button className=" rounded-full w-7 h-7 relative left-2 top-2 border-2 text-base ring-2 ring-red-600">
          <svg
            fill="#933e3e"
            width="19px"
            height="19px"
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#933e3e"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>ABB RobotStudio icon</title>
              <path d="M24 12.46a9.6 9.6 0 01-19.2 0h1.07a8.53 8.53 0 108.53-8.53V2.86a9.6 9.6 0 019.6 9.6zm-9.6-3.2a3.2 3.2 0 103.2 3.2 3.2 3.2 0 00-3.2-3.2zm-2 0l-.6-6.67-2.46 1.92-1.46-1.44a4.67 4.67 0 00-5.62-.37L.24 4a.54.54 0 00-.15.74.54.54 0 00.74.15l2-1.31a3.64 3.64 0 014.29.22l1.37 1.38L6.2 7z"></path>
            </g>
          </svg>
        </button>
      </div>
      <div className="w-fit relative top-1 left-5">
        <div className="w-fit flex justify-start font-semibold text-lg">
          {" "}
          ChatGPT{" "}
        </div>
        <div className="w-96 flex justify-start overflow-hidden font-medium text-base">
          {" "}
          Thanks to you my dear friend{" "}
        </div>
      </div>
    </div>
  );
}

export default Chat2;
