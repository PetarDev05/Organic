const Tabs = () => {
  return (
    <div className="w-full max-w-md flex space-x-2 bg-white p-1 border border-(--text-light)/50 rounded-md text-sm ">
      <div className="flex-1   flex items-center">
        <input
          type="radio"
          name="options"
          id="option3"
          className="hidden peer"
        />
        <label
          htmlFor="option3"
          className={`w-full cursor-pointer rounded-full py-2 text-center text-gray-500 transition-colors duration-200 `}
        >
          All
        </label>
      </div>
      <div className="flex-1  w-full   flex items-center">
        <input
          type="radio"
          name="options"
          id="option1"
          className="hidden peer"
        />
        <label
          htmlFor="option1"
          className={`w-full cursor-pointer rounded-full py-2 text-center text-gray-500 transition-colors duration-200`}
        >
          Fruits
        </label>
      </div>
      <div className="flex-1   flex items-center">
        <input
          type="radio"
          name="options"
          id="option2"
          className="hidden peer"
        />
        <label
          htmlFor="option2"
          className={`w-full cursor-pointer rounded-full py-2 text-center text-gray-500 transition-colors duration-200 `}
        >
          Vegetables
        </label>
      </div>
    </div>
  );
};

export default Tabs;
