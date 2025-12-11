import { useAppContext } from "../context/AppContext.jsx";
import { toast } from "react-hot-toast";

const notify = (message) => toast(message);

const useAuthFetch = () => {
const { dispatchUser, user } = useAppContext()

  const authFetch = async (url, options) => {
    options.credentials = "include";
    options.headers = {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${user.accessToken}`,
    };

    const response = await fetch(url, options);
    const json = await response.json();

    if (!response.ok) {
      if (
        json.message === "Access denied" ||
        json.message === "Token expired" ||
        json.message === "Invalid token" ||
        json.message === "Unauthorized" 
      ) {
        const refUrl = "http://localhost:8000/api/users/extend";
        const refOptions = {
          method: "POST",
          credentials: "include",
        }

        const refResponse = await fetch(refUrl, refOptions);
        const refJSON = await refResponse.json();

        if (!refResponse.ok) {
          dispatchUser({type: "LOGOUT"})
          notify("Your session expired, please log in again")
          return;
        } else {
          const newOptions = {
            ...options, headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${refJSON.accessToken}`,
            }
          }
          const newResponse = await fetch(url, newOptions);
          const newJSON = await newResponse.json();

          if (!newResponse.ok) {
            console.log(newJSON.message);
            
          }

          return newJSON
        }
      } else {
        throw new Error(json.message)
      }
    }

    return json;
};

  return authFetch;
};

export default useAuthFetch;
