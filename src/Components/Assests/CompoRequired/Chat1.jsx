import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Chat1() {
  const chat = useSelector((state) => state.Chats);
  //console.log(chat);
  return (
    <>
      {chat.map((chats, index) => {
        if (chats.message == "") {
          return null;
        } else {
          return (
            <div
              key={chats.index}
              className=" w-1/2 h-12 flex flex-row relative left-10 top-10 border-3 rounded-lg"
            >
              <div className="w-fit">
                <button className=" rounded-full w-7 h-7 relative left-2 top-2 border-2 bg-blue-300 text-base ring-2">
                  {" "}
                  A{" "}
                </button>
              </div>
              <div className="w-fit relative top-1 left-5">
                <div className="w-fit flex justify-start font-semibold text-lg">
                  {" "}
                  You{" "}
                </div>
                <div className="w-96 flex justify-start overflow-hidden font-medium text-base">
                  {" "}
                  {chats.message}
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

export default Chat1;
