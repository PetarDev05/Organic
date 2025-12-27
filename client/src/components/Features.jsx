import { BsCoin } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { SiCodefresh } from "react-icons/si";

const Features = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <h1 className="text-3xl md:text-4xl font-semibold text-(--text) text-center">
        Why are we the best?
      </h1>
      <p className="max-w-lg text-center text-(--text-light)">
        Everything you need to maintain good health and longevity 
      </p>

      <div className="flex items-center justify-center flex-wrap gap-6  px-4 md:px-0">
        <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-(--primary) gap-6 max-[500px]:w-full w-105">
          <div className="p-6 aspect-square bg-(--light-green) rounded-full">
            <TbTruckDelivery className="text-2xl" />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-700">
              Fastest delivery
            </h3>
            <p className="text-sm text-slate-600">
              Groceries delivered in under 30min
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-(--primary) gap-6 max-[500px]:w-full w-105">
          <div className="p-6 aspect-square bg-(--light-green) rounded-full">
            <SiCodefresh className="text-2xl" />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-700">
              Freshness guaranteed
            </h3>
            <p className="text-sm text-slate-600">
              Fresh products, strait from the garden
            </p>
          </div>
        </div>
        <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-(--primary) gap-6 max-[500px]:w-full w-105">
          <div className="p-6 aspect-square bg-(--light-green) rounded-full">
            <BsCoin className="text-2xl" />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-slate-700">
              Affordable prices
            </h3>
            <p className="text-sm text-slate-600">
              Unbeatable prices for premium products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
