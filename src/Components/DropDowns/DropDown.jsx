import React, { useState } from "react";

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle flex flex-row">
        <h1 className='flex justify-start ml-2 text-lg font-bold'> ChatGPT1.1 </h1>
        <svg width="28px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"></path> </g></svg>
      </button>

      {/*Dropdown menu*/}
      {isOpen && (
        <div className="dropdown-menu rounded-lg p-2 relative left-3 border-2 text-slate-800 h-32 w-fit justify-center align-middle">
          <p> App Version : 1.0 </p>
          <p> Developer: CopyMe </p>
        </div>
      )}
    </div>
  );
}

export default DropDown;
