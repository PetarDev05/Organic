import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";

const PaymentTabs = () => {
  return (
    <div className="flex space-x-2 bg-white p-1 border border-gray-500/50 rounded-md text-sm">
      <div className="flex items-center">
        <input
          type="radio"
          name="options"
          id="html"
          className="hidden peer"
          checked
        />
        <label
          htmlFor="html"
          className="cursor-pointer rounded py-2 px-8 text-gray-500 transition-colors duration-200 peer-checked:bg-(--primary) peer-checked:text-white"
        >
          <FaCcVisa className="text-2xl" />
        </label>
      </div>
      <div className="flex items-center">
        <input type="radio" name="options" id="css" className="hidden peer" />
        <label
          htmlFor="css"
          className="cursor-pointer rounded py-2 px-8 text-gray-500 transition-colors duration-200 peer-checked:bg-(--primary) peer-checked:text-white"
        >
          <FaCcMastercard className="text-2xl" />
        </label>
      </div>
    </div>
  );
};

export default PaymentTabs;
