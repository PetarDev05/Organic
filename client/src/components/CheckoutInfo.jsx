const CheckoutInfo = ({ cart }) => {
  let total = 0;
  cart?.forEach((item) => {
    total += item.price;
  });

  return (
    <div className="w-full flex flex-col items-center gap-2 p-5 border border-(--primary) rounded-lg">
      <h3 className="w-full text-center text-(--primary) text-2xl">
        Order summary
      </h3>
      {cart?.map((item, i) => (
        <div
          key={i}
          className="w-full flex flex-row items-center justify-between border-b border-dotted text-(--text)"
        >
          <span>{item.name}:</span>
          <span className="text-(--primary)">
            ${((item.price * item.quantity) / 100).toFixed(2)}
          </span>
        </div>
      ))}
      <div className="w-full flex flex-row items-center justify-between border-b border-dotted text-(--text)">
        <span>Tax: (10%)</span>
        <span className="text-(--primary)">${(total / 1000).toFixed(2)}</span>
      </div>
      <div className="w-full flex flex-row items-center justify-between border-b border-dotted">
        <span className="text-xl text-(primary)">Total:</span>
        <span className="">${((total + total / 10) / 100).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CheckoutInfo;
