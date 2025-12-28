// import { useEffect } from "react";
import useProductsContext from "../hooks/useProductsContext";

const Tabs = () => {
  const { fetchProducts, category, setCategory } = useProductsContext();

  const handleChange = (e) => {
    const { name } = e.target;
    setCategory(name);
    fetchProducts(name);
  };

  return (
    <div className="w-full max-w-md flex space-x-2 bg-white p-1 border border-(--text-light)/50 rounded-md text-sm ">
      <div
        className={`flex-1 flex items-center rounded-sm ${
          category === "" ? "bg-(--primary)" : ""
        }`}
      >
        <input
          type="radio"
          name=""
          id="all"
          className="hidden peer"
          onClick={handleChange}
          value={category}
        />
        <label
          htmlFor="all"
          className={`w-full cursor-pointer rounded-full py-2 text-center ${
            category === "" ? "text-(--white)" : "text-(--text)"
          } transition-colors duration-200 `}
        >
          All
        </label>
      </div>
      <div
        className={`flex-1 flex items-center rounded-sm ${
          category === "fruits" ? "bg-(--primary)" : ""
        }`}
      >
        <input
          type="radio"
          name="fruits"
          id="fruits"
          className="hidden peer"
          onClick={handleChange}
          value={category}
        />
        <label
          htmlFor="fruits"
          className={`w-full cursor-pointer rounded-full py-2 text-center ${
            category === "fruits" ? "text-(--white)" : "text-(--text)"
          } transition-colors duration-200`}
        >
          Fruits
        </label>
      </div>
      <div
        className={`flex-1 flex items-center rounded-sm ${
          category === "vegetables" ? "bg-(--primary)" : ""
        }`}
      >
        <input
          type="radio"
          name="vegetables"
          id="vegetables"
          className="hidden peer"
          onClick={handleChange}
          value={category}
        />
        <label
          htmlFor="vegetables"
          className={`w-full cursor-pointer rounded-full py-2 text-center ${
            category === "vegetables" ? "text-(--white)" : "text-(--text)"
          } transition-colors duration-200 `}
        >
          Vegetables
        </label>
      </div>
    </div>
  );
};

export default Tabs;
