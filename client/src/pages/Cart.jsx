// react
import { useEffect, useState } from "react";

// react-router-dom
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// icons
import { GoArrowLeft } from "react-icons/go";

// notifications
import { toast } from "react-hot-toast";

// hooks
import { useAppContext } from "../context/AppContext.jsx";
import useAuthFetch from "../hooks/useAuthFetch.jsx";

const notify = (message) => toast(message);

const Cart = () => {
  const [showAddress, setShowAddress] = useState(false);
  const [online, setOnline] = useState("Place Order");
  const authFetch = useAuthFetch();
  const { user, cartProducts, setCartProducts, address } = useAppContext();

  const navigate = useNavigate();

  const handlePaymentType = (e) => {
    const { value } = e.target;
    value === "COD"
      ? setOnline("Place Order")
      : setOnline("Proceed to checkout");
  };

  const getCart = async () => {
    const url = `http://localhost:8000/api/products/${user.person._id}`;
    const options = {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const json = await authFetch(url, options);
    setCartProducts(json.data.cart);
  };

  const removeFromCart = async (productId) => {
    console.log("Product id: ",productId);
    console.log("User id: ", user.person._id);

    const url = `http://localhost:8000/api/products/cart/${user.person._id}`;
    const options = {
      method: "PATCH",
      body: JSON.stringify({ productId }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const data = await authFetch(url, options);
    notify(data.message);
    console.log(data);
    const newCart = cartProducts.filter((item) => item._id !== productId);
    setCartProducts(newCart);
  };

  useEffect(() => {
    if (!user || !user.person._id) {
      return;
    }

    getCart();
  }, [user]);

  const handlePayment = async () => {
    
  };

  return (
    <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto">
      <div className="flex-1 max-w-4xl">
        <h1 className="text-3xl font-medium mb-6">
          Shopping Cart
          <span className="text-sm text-(--primary) ml-6">
            {cartProducts.length} Items
          </span>
        </h1>

        <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
          <p className="text-left">Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>

        {cartProducts.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3"
          >
            <div className="flex items-center md:gap-6 gap-3">
              <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden">
                <img
                  className="max-w-full h-full object-cover"
                  src={product.productId.image}
                  alt={product.productId.name}
                />
              </div>
              <div>
                <p className="hidden md:block font-semibold">{product.name}</p>
                <div className="font-normal text-gray-500/70">
                  <div className="flex items-center">
                    <p>Qty: {product.quantity}</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center">${product.productId.price}</p>
            <button
              onClick={() => removeFromCart(product._id)}
              className="cursor-pointer mx-auto"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"
                  stroke="#FF532E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}

        <Link
          to="/products"
          className="w-fit group cursor-pointer flex items-center mt-8 gap-2 text-(--primary) font-medium"
        >
          <GoArrowLeft className="text-xl" />
          Continue Shopping
        </Link>
      </div>

      <div className="max-w-[360px] w-full  max-md:mt-16">
        <div className="w-full h-fit bg-gray-100/40 border border-gray-300/70 p-5">
          <h2 className="text-xl md:text-xl font-medium">Order Summary</h2>
          <hr className="border-gray-300 my-5" />

          <div className="mb-6">
            <p className="text-sm font-medium uppercase">Delivery Address</p>
            <div className="relative flex justify-between items-start mt-2">
              <p className="text-gray-500">{address.street ? `${address.street}` : "No address found"}</p>
              <button
                onClick={() => setShowAddress(!showAddress)}
                className="text-(--primary) hover:underline cursor-pointer"
              >
                Change
              </button>
              {showAddress && (
                <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                  <p
                    onClick={() => setShowAddress(false)}
                    className="text-gray-500 p-2 hover:bg-gray-100"
                  >
                    {address.firstName}
                  </p>
                  <Link to="/address">
                    <p
                      onClick={() => setShowAddress(false)}
                      className="w-full text-(--primary) text-center cursor-pointer p-2 hover:bg-(--light-green)"
                    >
                      Add address
                    </p>
                  </Link>
                </div>
              )}
            </div>

            <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

            <select
              onChange={handlePaymentType}
              className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none"
            >
              <option value="COD">Cash On Delivery</option>
              <option value="Online">Online Payment</option>
            </select>
          </div>

          <hr className="border-gray-300" />

          <div className="text-gray-500 mt-4 space-y-2">
            <p className="flex justify-between">
              <span>Price</span>
              <span>$20</span>
            </p>
            <p className="flex justify-between">
              <span>Shipping Fee</span>
              <span className="text-green-600">Free</span>
            </p>
            <p className="flex justify-between">
              <span>Tax (2%)</span>
              <span>$20</span>
            </p>
            <p className="flex justify-between text-lg font-medium mt-3">
              <span>Total Amount:</span>
              <span>$20</span>
            </p>
          </div>

          <button
            onClick={handlePayment}
            className="w-full py-3 mt-6 cursor-pointer bg-(--primary) text-white font-medium hover:bg-(--primary-darker) transition"
          >
            {online}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
