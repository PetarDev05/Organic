// notifications
import { useState } from "react";
import { toast } from "react-hot-toast";

const notify = (message) => toast(message);

const Newsletter = () => {
  const [input, setInput] = useState("")
  const notification = "You are added to newsletter program";

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
      <h1 className="text-4xl md:text-5xl font-semibold text-(--text) mt-4 text-center">
        Subscribe to our newsletter
      </h1>
      <p className="max-w-lg text-center text-(--text-light) mt-6">
        Join thousands of users who are buying every day, and taste what nature intended for us.
      </p>
      <form onSubmit={subscribe} className="relative flex items-center rounded-md border border-slate-200 mt-6 text-sm max-w-md w-full">
        <svg
          className="absolute left-3"
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 6 9.505 8.865a1 1 0 0 1-1.005 0L4 6"
            stroke="#90A1B9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.3 1H2.7C1.761 1 1 1.84 1 2.875v11.25C1 15.161 1.761 16 2.7 16h13.6c.939 0 1.7-.84 1.7-1.875V2.875C18 1.839 17.239 1 16.3 1"
            stroke="#90A1B9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={input}
          placeholder="Email"
          className="focus:outline-none pl-10 py-5 bg-transparent w-full"
          required
        />
        <button type="submit" className="shrink-0 mr-2 px-6 py-3 text-sm bg-(--primary) rounded-md active:scale-95 transition duration-300 text-white">
          Subscribe now
        </button>
      </form>
    </section>
  );
}

export default Newsletter