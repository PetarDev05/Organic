// react
import { useEffect } from "react";

// icons
import { BiPackage } from "react-icons/bi";

// hooks
import { useAppContext } from "../context/AppContext.jsx";
import useAuthFetch from "../hooks/useAuthFetch.jsx";

const Orders = () => {
  const {orders, setOrders, user} = useAppContext();
  const authFetch = useAuthFetch()

  useEffect(() => {
    const getAllOrders = async () => {
      const url = `http://localhost:8000/api/orders/${user.person._id}`;
      const options = {
        method: "GET"
      }
      const data = await authFetch(url, options);
      setOrders(data.orders);
    }

    getAllOrders()
  }, [])
  
  return (
    <div className="px-10 min-h-[70vh] py-10 space-y-4">
      <h2 className="text-lg font-medium">Orders List</h2>


      {orders.map((order) => (
        <div
          key={order._id}
          className="md:w-fit flex flex-col md:grid md:grid-cols-[1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800"
        >
          <div className="md:w-fit flex gap-5 flex-row items-center justify-between">
            <BiPackage className="text-5xl" />
            <div  className="flex flex-col justify-center">
              {order.items.map((item, index) => (
                  <p key={index} className="font-medium flex flex-row items-center justify-between gap-5">
                    {item.name}
                    <span
                      className="text-indigo-500"
                    >
                      x {item.quantity}
                    </span>
                  </p>
              ))}
            </div>
          </div>
          <div className="text-sm">
            <p className="font-medium mb-1">
              {order.address.firstName} {order.address.lastName}
            </p>
            <p>
              {order.address.street}, {order.address.city},{" "}
              {order.address.state},{order.address.postalCode},{" "}
              {order.address.country}
            </p>
          </div>

          <p className="font-medium text-base my-auto text-black/70 md:text-center">
            Total: ${(order.amount / 100).toFixed(2)}
          </p>
        </div>
      ))}

    </div>
  );
};

export default Orders;
