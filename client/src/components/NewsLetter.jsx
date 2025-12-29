import { useState } from "react";
import { toast } from "react-hot-toast";
import { PiEnvelopeLight } from "react-icons/pi";

const notify = (message) => toast(message);

const Newsletter = () => {
  const [input, setInput] = useState("")
  const notification = "You are added to the newsletter program";

  const subscribe = (e) => {
    e.preventDefault();
    notify(notification);
    setInput("")
  }

  const handleChange = (e) => {
    const {value} = e.target;
    setInput(value);
  }

  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-semibold text-(--text) mt-4 text-center">
        Subscribe to our newsletter
      </h1>
      <p className="max-w-lg text-center text-(--text-light) mt-6">
        Join thousands of users who are buying every day, and taste what nature intended for us.
      </p>
      <form onSubmit={subscribe} className="relative flex items-center rounded-md border border-slate-200 mt-6 text-sm max-w-md w-full">
        <PiEnvelopeLight className="absolute left-3 text-lg text-(--text)" />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={input}
          placeholder="Email"
          className="focus:outline-none pl-10 py-5 bg-transparent w-full"
          required
        />
        <button type="submit" className="shrink-0 mr-2 px-6 py-3 text-sm bg-(--primary) rounded-md active:scale-95 transition duration-300 text-white cursor-pointer">
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default Newsletter