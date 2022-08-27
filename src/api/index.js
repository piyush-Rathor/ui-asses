import axios from "axios";

/**
 *
 * @param {string} url
 * @param {*} [data]
 * @param {"GET"|"POST"} [method="GET"]
 */

const callApi = async (url, data = null, method = "GET") => {
  try {
    const response = await axios({
      url: `https://back-asses.herokuapp.com/${url}`,
      data,
      method,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

const api = {
  getPosts: async () => await callApi("posts"),
  getPost:async (id) => await callApi(`posts/${id}`),
  createPost:async (data) => await callApi(`posts`,data,"POST"),
};

export default api;
