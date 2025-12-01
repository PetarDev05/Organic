// react-router-dom
import { Link, useNavigate } from "react-router-dom";

// hooks
import { useAppContext } from "../../context/AppContext.jsx";

const ShippingAddress = () => {
  const navigate = useNavigate();
  const { address, setAddress } = useAppContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    navigate("/cart");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full sm:w-[560px] flex flex-col items-center gap-5 "
    >
      <div className="w-full flex flex-row items-center gap-5">
        <input
          type="text"
          required
          name="firstName"
          onChange={handleChange}
          value={address.firstName}
          className="flex-1 min-w-[100px] p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={address.lastName}
          className="flex-1 min-w-[100px] p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
          placeholder="Last Name"
        />
      </div>
      <input
        type="text"
        name="street"
        onChange={handleChange}
        value={address.street}
        className="w-full p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
        placeholder="Street"
      />
      <div className="w-full flex flex-row items-center gap-5">
        <input
          type="text"
          name="city"
          onChange={handleChange}
          value={address.city}
          className="flex-1 min-w-[100px] p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
          placeholder="City"
        />
        <input
          type="text"
          name="state"
          onChange={handleChange}
          value={address.state}
          className="flex-1 min-w-[100px] p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
          placeholder="State"
        />
      </div>
      <div className="w-full flex flex-row items-center gap-5">
        <input
          type="text"
          name="postalCode"
          onChange={handleChange}
          value={address.postalCode}
          className="flex-1 min-w-[100px] p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
          placeholder="Postal Code"
        />
        <input
          type="text"
          name="country"
          onChange={handleChange}
          value={address.country}
          className="flex-1 min-w-[100px] p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
          placeholder="Country"
        />
      </div>
      <input
        type="number"
        name="phone"
        onChange={handleChange}
        value={address.phone}
        className="w-full p-2 border border-(--details-border) rounded-sm focus:border-(--primary) outline-none"
        placeholder="Phone Number"
      />
      <button
        type="submit"
        className="w-full py-2 text-center bg-(--primary) text-(--white) cursor-pointer rounded-sm"
      >
        Add address
      </button>
    </form>
  );
};

export default ShippingAddress;
