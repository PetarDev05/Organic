import CartItem from "../components/CartItem.jsx";
import useProductsContext from "../hooks/useProductsContext.jsx";
const Checkout = () => {
  const { cart } = useProductsContext();

  if (!cart.length) {
    return (
      <div className="w-full min-h-[95vh] max-w-120 flex items-center justify-center">
        <p className="text-lg text-(--text)">Loading...</p>
      </div>
    )
  }

  return (
    <div className="w-full min-h-[95vh] flex flex-row items-center gap-5 sm:gap-10">
      <div className="w-120 flex flex-col items-center gap-5">
        {cart?.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
