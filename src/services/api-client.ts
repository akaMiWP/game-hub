import axios from "axios";

const apiKey: string = import.meta.env.VITE_API_KEY;

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: apiKey,
  },
});
