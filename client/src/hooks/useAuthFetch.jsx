// context
import { useAppContext } from "../context/AppContext.jsx";

const useAuthFetch = () => {
  const { dispatch: dispatchProducts } = useAppContext();
  const authFetch = async (url, options = {}) => {
    const response = await fetch(url, options);
    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.message);
    }

    return json;
  };

  return authFetch;
};

export default useAuthFetch;
