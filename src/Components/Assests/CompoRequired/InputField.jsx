import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { sentChat } from "../../../reducers/Slices/chatSlices";

const apiKey = import.meta.env.VITE_API_URL;
//console.log(apiKey);

function InputField() {
  const [inputText, setInputText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputText);
    dispatch(sentChat({ inputText }));
    if (inputText != "") {
      axios
        .post(`${apiKey}/userSent`, { sentchat: `${inputText}` })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(" Error while API Calling", error);
        });
      axios
        .post(`${apiKey}/serverSent`, {recievedChat: `${inputText}`})
        .then((res)=>{
          console.log(res.data);
        })
        .catch((err)=>{
          console.log(" Error while calling server: ",err);
        });  
    }
    setInputText("");
  };

  return (
    <form
      className="flex flex-row gap-2 justify-around mt-2 p-1"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        placeholder="Message ChatGPT... "
        className="w-3/4 h-14 p-6 rounded-lg relative left-8 text-black text-base font-medium"
      />
      <button type="submit" className=" relative right-5">
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              opacity="0.4"
              d="M16.1898 2H7.81978C4.17978 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17978 21.99 7.81978 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z"
              fill="#292D32"
            ></path>{" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.4697 5.97968C11.7626 5.68679 12.2374 5.68679 12.5303 5.97968L15.5303 8.97968C15.8232 9.27257 15.8232 9.74745 15.5303 10.0403C15.2374 10.3332 14.7626 10.3332 14.4697 10.0403L12 7.57067L9.53033 10.0403C9.23744 10.3332 8.76256 10.3332 8.46967 10.0403C8.17678 9.74745 8.17678 9.27257 8.46967 8.97968L11.4697 5.97968Z"
              fill="#292D32"
            ></path>{" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 5.76001C12.4142 5.76001 12.75 6.0958 12.75 6.51001V14.51C12.75 14.9242 12.4142 15.26 12 15.26C11.5858 15.26 11.25 14.9242 11.25 14.51V6.51001C11.25 6.0958 11.5858 5.76001 12 5.76001Z"
              fill="#292D32"
            ></path>{" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.28887 16.2722C5.42016 15.8794 5.84507 15.6674 6.23792 15.7986C9.97364 17.0471 14.0268 17.0471 17.7625 15.7986C18.1553 15.6674 18.5802 15.8794 18.7115 16.2722C18.8428 16.6651 18.6308 17.09 18.2379 17.2213C14.1936 18.5729 9.80677 18.5729 5.76248 17.2213C5.36963 17.09 5.15759 16.6651 5.28887 16.2722Z"
              fill="#292D32"
            ></path>{" "}
          </g>
        </svg>{" "}
      </button>
    </form>
  );
}

export default InputField;
