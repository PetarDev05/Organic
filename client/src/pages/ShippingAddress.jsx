import ShippingAddress from "../components/Customer/AddressForm.jsx";

const AddressForm = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 px-10 py-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-(--text) text-center">
        Add shipping address
      </h2>
      <ShippingAddress />
    </div>
  );
};

export default AddressForm;
