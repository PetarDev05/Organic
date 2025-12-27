const useFetch = () => {
  const send = async (url, options = {}) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        console.log(response);
        throw new Error("Error sending request");
        
      }
      const json = await response.json();
      
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  return send;
};

export default useFetch;
