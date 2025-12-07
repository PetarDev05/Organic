// hooks
import { useAppContext } from "../context/AppContext.jsx";

const useAuthFetch = () => {
const {user} = useAppContext()

  const authFetch = async (url, options = {}) => {
    if (options) {
      options.credentials = "include";
      options.headers = {
        "Content-type": "application/json; charset=UTF-8",
        // Authorization: `Bearer ${user.accessToken}`
      }
    } else {
      
    }




    const response = await fetch(url, options);
    const json = await response.json();
    if (!response.ok) {
      console.log(json);
      throw new Error(json.message);
    }

    return json;
  };

  return authFetch;
};

export default useAuthFetch;
