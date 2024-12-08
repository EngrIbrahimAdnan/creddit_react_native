import axios from "axios";

const instance = axios.create({
  basURL: "https://api.example.com/data",
});

export default instance;
