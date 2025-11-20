// react-router-dom
import { useParams } from "react-router-dom";

// react-router-dom
import { Link } from "react-router-dom";

// components
import Details from "../components/Customer/Details.jsx";

// context
import { useAppContext } from "../context/AppContext.jsx";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useAppContext();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find((item) => item._id === id);
    setProduct(found);
  }, [products]);

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-10">
      <Details product={product} />
    </div>
  );
};

export default ProductDetails;
