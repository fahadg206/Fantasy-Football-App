import axios from "axios";

export default axios.create({
  baseURL: "https://api.sleeper.app/v1",
});
