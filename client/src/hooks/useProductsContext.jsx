import { useContext } from "react";
import { Context } from "../context/Context.jsx";

const useProductsContext = () => {
  const context = useContext(Context);

  if (!context) {
    console.log("No context");
    return;
  }

  return context;
};

export default useProductsContext;
