import CartItem from "../components/CartItem.jsx";
import useProductsContext from "../hooks/useProductsContext.jsx";
import CheckoutInfo from "../components/CheckoutInfo.jsx";
import PaymentForm from "../components/PaymentForm.jsx";

const Checkout = () => {
  const { cart } = useProductsContext();  

  return (
    <div className="w-full min-h-[95vh] flex flex-col items-center gap-5 sm:gap-10 p-5 sm:p-10">
      <div className="flex flex-row items-end gap-3">
        <h2 className="text-3xl text-(--text)">Checkout</h2>
        <p className="text-lg text-(--primary)">{cart.length} items</p>
      </div>
      <div className="w-full max-w-225 flex flex-col-reverse min-[800px]:flex-row items-center min-[800px]:items-start justify-between gap-10">
        <div className="w-full flex-1 flex flex-col items-center gap-5">
          {cart?.map((item, i) => (
            <CartItem item={item} key={i} />
          ))}
          {!cart.length && <p className="text-(--text) text-lg">Your cart is empty</p>}
        </div>
        <div className="w-full max-w-120 flex-1 flex flex-col items-center gap-10">
          <CheckoutInfo cart={cart} />
          <PaymentForm />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
