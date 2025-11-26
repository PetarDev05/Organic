const useAuthFetch = () => {
  const authFetch = async (url, options = {}) => {
    if (options) {
      options.credentials = "include"
    }
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
