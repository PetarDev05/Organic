// react
import { useState } from "react";

const Tabs = () => {
  const [fruits, setFruits] = useState();
  const [vegetables, setVegetables] = useState();

  return (
    <div className="flex space-x-2 bg-white p-1 border border-gray-500/50 rounded-full text-sm ">
      <div className="flex items-center">
        <input
          type="radio"
          name="options"
          id="option1"
          className="hidden peer"
        />
        <label
          htmlFor="option1"
          className="cursor-pointer rounded-full py-2 px-9 text-gray-500 transition-colors duration-200 peer-checked:bg-(--primary) peer-checked:text-white"
        >
          Fruits
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          name="options"
          id="option2"
          className="hidden peer"
        />
        <label
          htmlFor="option2"
          className="cursor-pointer rounded-full py-2 px-9 text-gray-500 transition-colors duration-200 peer-checked:bg-(--primary) peer-checked:text-white"
        >
          Vegetables
        </label>
      </div>
    </div>
  );
};

export default Tabs;
