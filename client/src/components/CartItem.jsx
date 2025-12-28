import { CgCloseR } from "react-icons/cg";
import useProductsContext from "../hooks/useProductsContext.jsx";

const CartItem = ({ item }) => {
  const { removeFromCart } = useProductsContext();

  return (
    <div className="w-full flex flex-row items-center justify-between p-1 pr-10 border border-(--text-light)/50 rounded-lg">
      <div className="h-25 aspect-square">
        <img
          src={`/${item.image}`}
          alt={`${item.name}`}
          className="h-25 w-25 object-contain"
        />
      </div>
      <div className="flex flex-col items-start justify-between gap-1">
        <p className="text-lg font-semibold text-(--primary)">{item.name}</p>
        <p className="text-md text-(--text-light)">
          Total: ${((item.price * item.quantity) / 100).toFixed(2)}
        </p>
        <p className="text-md text-(--text-light)">Quantity: {item.quantity}</p>
      </div>
      <CgCloseR
        onClick={() => removeFromCart(item.id)}
        className="text-(--red) text-2xl cursor-pointer"
      />
    </div>
  );
};

export default CartItem;
