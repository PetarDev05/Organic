// react
import { useState } from "react";

// icons
import { IoCloseCircleOutline } from "react-icons/io5";

// hooks
import { useAppContext } from "../../context/AppContext.jsx";
import useUserAction from "../../hooks/useUserAction.jsx";

// dependencies
import toast from "react-hot-toast";

// react-router-dom
import { useNavigate } from "react-router-dom";

const notify = (message) => toast(message);

const LoginForm = () => {
  const navigate = useNavigate();
  const { setShowLogin, dispatchUser, setLoadingUser } = useAppContext();
  const userAction = useUserAction();

  const [flag, setFlag] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const url = `http://localhost:8000/api/users/${
      flag === "register" ? "signup" : "login"
    }`;

    const body = {
      email,
      password,
    };

    if (flag === "register") {
      body.name = name;
    }

    const options = {
      body: JSON.stringify(body),
    };
    const data = await userAction(url, options);
    dispatchUser({ type: "LOGIN", payload: data });
    setLoadingUser(false)
    if (data.message) {
      notify(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setShowLogin(false);
    } else {
      notify(data);
    }
  };

  return (
    <div className="w-full h-screen fixed inset-0 bg-(--text-dark)/50 z-50">
      <form className="flex flex-col relative top-1/2 left-1/2 -translate-1/2 gap-4  items-start px-6 py-8 sm:px-8 sm:py-12 w-75 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white">
        <IoCloseCircleOutline
          className="absolute top-9 right-10 text-2xl text-(--red) cursor-pointer"
          onClick={() => setShowLogin(false)}
        />
        <p className="text-2xl font-medium m-auto">
          {flag === "login" ? "Login" : "Sign Up"}
        </p>
        {flag === "register" && (
          <div className="w-full">
            <p>Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-(--primary)"
              type="text"
              required
            />
          </div>
        )}
        <div className="w-full ">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="type here"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-(--primary)"
            type="email"
            required
          />
        </div>
        <div className="w-full ">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="type here"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-(--primary)"
            type="password"
            required
          />
        </div>
        {flag === "register" ? (
          <p>
            Already have account?
            <span
              onClick={() => setFlag("login")}
              className="text-(--primary) cursor-pointer"
            >
              click here
            </span>
          </p>
        ) : (
          <p>
            Dont't have an account?
            <span
              onClick={() => setFlag("register")}
              className="text-(--primary) cursor-pointer"
            >
              click here
            </span>
          </p>
        )}
        <button
          onClick={handleLogin}
          className="bg-(--primary) hover:bg-(--primary-darker) transition-all text-white w-full py-2 rounded-md cursor-pointer"
        >
          {flag === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
