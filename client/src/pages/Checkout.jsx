// react-router-dom
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// components
import PaymentTabs from "../components/Customer/PaymentTabs.jsx";

const Checkout = () => {
  const navigate = useNavigate();

  const handlePayment = async () => {
    navigate("/orders")
  };

  return (
    <div className="w-full px-10 flex flex-col items-center justify-center min-h-[65vh] gap-10 py-20">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-3xl font-medium">Online payment checkout</h2>
        <p className="text-(--text-light) text-center">
          Enter your credit card details below
        </p>
      </div>

      <form className="w-[600px] flex flex-col items-start gap-5">
        <PaymentTabs />
        <div className="w-full flex flex-row items-center gap-5">
          <input
            type="text"
            className="flex-1 p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
            placeholder="First Name"
          />
          <input
            type="text"
            className="flex-1 p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
            placeholder="Last Name"
          />
        </div>
        <input
          type="number"
          className="w-full p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
          placeholder="Enter card number"
        />
        <div className="w-full flex flex-row items-center gap-5">
          <input
            type="text"
            className="flex-1 p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
            placeholder="Exp. date"
          />
          <input
            type="text"
            className="flex-1 p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
            placeholder="CVV"
          />
        </div>
        <button
          onClick={handlePayment}
          className="w-full py-3 cursor-pointer bg-(--primary) text-white font-medium hover:bg-(--primary-darker) transition rounded-sm"
        >
          Place order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
