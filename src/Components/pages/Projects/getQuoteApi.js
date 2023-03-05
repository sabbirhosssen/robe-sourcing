import axios from "axios";

    const getQuoteApi = async () => {
      const data = await axios.get("https://jsonplaceholder.typicode.com/users");
      return data;
    };
    export default getQuoteApi()