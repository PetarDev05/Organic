// hooks
import { useAppContext } from "../../context/AppContext.jsx";

// react
import { useState } from "react";

const Tabs = () => {
  const { setProductFlag, selected, setSelected } = useAppContext();
  

  return (
    <div className="flex space-x-2 bg-white p-1 border border-gray-500/50 rounded-full text-sm ">
      <div className="w-[130px] flex items-center">
        <input
          type="radio"
          name="options"
          onChange={() => {
            setProductFlag("fruits")
            setSelected(true)
          }}
          value={"fruits"}
          id="option1"
          className="hidden peer"
        />
        <label
          htmlFor="option1"
          className={`w-full cursor-pointer rounded-full py-2 text-center text-gray-500 transition-colors duration-200 ${selected ? "bg-(--primary) text-white" : ""}`}
        >
          Fruits
        </label>
      </div>
      <div className="w-[130px] flex items-center">
        <input
          type="radio"
          name="options"
          onChange={() => {
            setProductFlag("vegetables")
            setSelected(false)
          }}
          value={"vegetables"}
          id="option2"
          className="hidden peer"
        />
        <label
          htmlFor="option2"
className={`w-full cursor-pointer rounded-full py-2 text-center text-gray-500 transition-colors duration-200 ${!selected ? "bg-(--primary) text-white" : ""}`}
        >
          Vegetables
        </label>
      </div>
    </div>
  );
};

export default Tabs;
