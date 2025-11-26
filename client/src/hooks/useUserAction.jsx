const useUserAction = () => {
  const userAction = async (url, options) => {
    options.method = "POST";
    options.credentials = "include";
    options.headers = {
      "Content-type": "application/json; charset=UTF-8",
    };

    try {
      const response = await fetch(url, options);
      const json = await response.json();
      if (!response.ok) {
        return json.message;
      }
      return json;
    } catch (error) {
      return error.message;
    }
  };

  return userAction;
};

export default useUserAction;
