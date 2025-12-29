import { useState } from "react";
import useProductsContext from "../hooks/useProductsContext.jsx";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const navigate = useNavigate();
  const { cart, setCart } = useProductsContext();
  const [formData, setFormData] = useState({
    address: "",
    email: "",
    postalCode: "",
    payment: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCart([]);
    localStorage.removeItem("cart");
    setFormData({
      address: "",
      email: "",
      postalCode: "",
      payment: "",
      cardNumber: "",
      expDate: "",
      cvv: "",
    });
    navigate("/thanks");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-center gap-5 "
    >
      <h3 className="w-full text-center text-(--primary) text-2xl">
        Create an order
      </h3>
      <input
        type="text"
        required
        name="address"
        onChange={handleChange}
        value={formData.address}
        className="w-full p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
        placeholder="Address"
      />
      <div className="w-full flex flex-row items-center gap-5">
        <input
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={formData.email}
          className="w-full min-w-0 p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
          placeholder="Email"
        />
        <input
          type="number"
          required
          name="postalCode"
          onChange={handleChange}
          value={formData.postalCode}
          className="w-full min-w-0 p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
          placeholder="Postal Code"
        />
      </div>
      <select
        name="payment"
        id=""
        value={formData.payment}
        onChange={handleChange}
        className="w-full p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none text-(--text-light)"
      >
        <option value="" className="text-(--text-light)">
          Cash on delivery
        </option>
        <option value="online" className="text-(--text-light)">
          Online payment
        </option>
      </select>
      {formData.payment && (
        <>
          <input
            type="number"
            required
            name="cardNumber"
            onChange={handleChange}
            value={formData.cardNumber}
            className="w-full p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
            placeholder="Card Number"
          />
          <div className="w-full flex flex-row items-center gap-5">
            <input
              type="text"
              required
              name="expDate"
              onChange={handleChange}
              value={formData.expDate}
              className="w-full min-w-0 flex-1 p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
              placeholder="Exp. date"
            />
            <input
              type="number"
              required
              name="cvv"
              onChange={handleChange}
              value={formData.cvv}
              className="w-full min-w-0 flex-1 p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
              placeholder="CVV"
            />
          </div>
        </>
      )}
      <button
        disabled={cart.length ? false : true}
        type="submit"
        className="w-full py-2 text-center bg-(--primary) text-(--white) cursor-pointer rounded-sm"
      >
        Place Order
      </button>
    </form>
  );
};

export default PaymentForm;
