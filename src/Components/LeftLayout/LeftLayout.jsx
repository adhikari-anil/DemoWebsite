import React from "react";

function LeftLayout() {
  return (
    <div className="h-[100vh] w-96 text-center bg-white flex flex-col justify-between rounded-lg border-2 overflow-y-scroll">
      <button className="text-black h-10 w-60 p-1 relative top-5 left-2 rounded-lg flex flex-row justify-between hover:bg-slate-400">
        <svg
          fill="#933e3e"
          width="30px"
          height="30px"
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
        New Chat
        <svg
          width="20px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>
      <div className="bg-slate-500">
        <h1> Hello GoodMorning Anil </h1>
      </div>
      <button className="rounded-lg h-10 w-60 flex flex-row justify-between relative bottom-3 left-2 bg-white hover:bg-slate-400">
        <button className="border-3 rounded-full w-7 h-7 relative left-2 top-2 ring-4 border-2 bg-blue-300 text-base">
          {" "}
          A{" "}
        </button>
        <h4 className="relative right-24 top-2 text-[ 1.1rem] font-sans">
          {" "}
          Anil Adhikari{" "}
        </h4>
      </button>
    </div>
  );
}

export default LeftLayout;
