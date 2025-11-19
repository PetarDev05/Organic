// react-router-dom
import { Link } from "react-router-dom";

const ShippingAddress = () => {
  return (
    <form className="w-[650px] flex flex-col items-center gap-5 ">
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
        type="email"
        className="w-full p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
        placeholder="Email"
      />
      <input
        type="text"
        className="w-full p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
        placeholder="Street"
      />
      <div className="w-full flex flex-row items-center gap-5">
        <input
          type="text"
          className="flex-1 p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
          placeholder="City"
        />
        <input
          type="text"
          className="flex-1 p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
          placeholder="State"
        />
      </div>
      <div className="w-full flex flex-row items-center gap-5">
        <input
          type="text"
          className="flex-1 p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
          placeholder="Zip Code"
        />
        <input
          type="text"
          className="flex-1 p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
          placeholder="Country"
        />
      </div>
      <input
        type="number"
        className="w-full p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
        placeholder="Phone Number"
      />
      <Link
        to="/cart"
        className="w-full py-2 text-center bg-(--primary) text-(--white) cursor-pointer rounded-sm"
      >
        Add address
      </Link>
    </form>
  );
};

export default ShippingAddress;
