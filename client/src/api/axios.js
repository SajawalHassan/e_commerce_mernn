import axios from "axios";

export default axios.create({
  baseURL: "http://10.0.2.2:5000",
  headers: { "Content-Type": "application/json" },
});
