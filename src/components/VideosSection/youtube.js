import axios from "axios";

const KEY = "AIzaSyA8wqGU3d5VEAPhmhWEepm72oQtzlulQuA";

//Axios config object
//Could be used for multiple API requests from the same API
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
