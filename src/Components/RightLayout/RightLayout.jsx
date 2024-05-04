import React, { useState } from "react";
import DropDown from "../DropDowns/DropDown";
import Chat1 from "../Assests/CompoRequired/Chat1";
import Chat2 from "../Assests/CompoRequired/Chat2";
import InputField from "../Assests/CompoRequired/InputField";

function RightLayout() {
  return (
    <div className="h-screen w-screen text-center flex flex-col justify-between overflow-auto relative">
      <div className="absolute top-0 left-0 w-full">
        <DropDown />
      </div>
      <div className="h-3/4 w-1/2 relative left-96 top-8 flex flex-col border-2 rounded-lg gap-5 overflow-auto">
        <Chat1 />
        <Chat2 />
      </div>
      <div className="flex flex-col border-2 rounded-lg gap-1">
        <InputField />
        <h6 className="mb-1 p-1">
          {" "}
          ChatGPT donot make mistake but you always does{" "}
        </h6>
      </div>
    </div>
  );
}

export default RightLayout;
