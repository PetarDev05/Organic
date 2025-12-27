import { RxMagnifyingGlass } from "react-icons/rx";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-3 max-w-md w-full">
      <div className="flex items-center w-full border pl-3 gap-2 bg-white border-gray-500/30 h-11 rounded-md overflow-hidden">
        <RxMagnifyingGlass className="text-(--text) text-lg" />
        <input
          type="text"
          placeholder="Search for products"
          className="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm"
        />
      </div>
      <button
        type="submit"
        className="bg-(--primary) w-32 h-11 rounded-md text-sm text-white"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
