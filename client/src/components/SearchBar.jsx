import { useState } from "react";
import useProductsContext from "../hooks/useProductsContext";
import { RxMagnifyingGlass } from "react-icons/rx";

const SearchBar = () => {
  const { fetchProducts, category } = useProductsContext();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const search = () => {
    fetchProducts(category, input);
    setInput("");
  };

  return (
    <div className="flex items-center gap-3 max-w-md w-full">
      <div className="flex items-center w-full border pl-3 gap-2 bg-white border-gray-500/30 h-11 rounded-md overflow-hidden">
        <RxMagnifyingGlass className="text-(--text) text-lg" />
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search for products"
          className="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm"
        />
      </div>
      <button
        type="submit"
        onClick={search}
        className="bg-(--primary) w-32 h-11 rounded-md text-sm text-white cursor-pointer"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
