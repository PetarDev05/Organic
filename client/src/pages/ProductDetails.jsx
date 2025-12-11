import { useParams } from "react-router-dom";
import Details from "../components/Customer/Details.jsx";
import { useAppContext } from "../context/AppContext.jsx";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useAppContext();

  const product = products.find((item) => item._id === id);

  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-10">
      <Details product={product} />
    </div>
  );
};

export default ProductDetails;
