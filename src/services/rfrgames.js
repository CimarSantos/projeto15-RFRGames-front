import axios from "axios";

const urlBase = process.env.REACT_APP_API_URL;

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("user"));
  if (auth) {
    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    };
    return config;
  }
}

function signup(body) {
  return axios.post(`${urlBase}/sign-up`, body);
}

function login(body) {
  return axios.post(`${urlBase}/login`, body);
}

function getGames() {
  return axios.get(`${urlBase}/games`);
}

function postCart(selected) {
  const config = createHeaders();
  return axios.post(`${urlBase}/cart`, selected, config);
}

// function getCart() {
//   const config = createHeaders();
//   return axios.get(`${urlBase}/cart`, config);
// }

// function deleteCart(id) {
//   const config = createHeaders();
//   return axios.delete(`${urlBase}/cart/${id}`, config);
// }

export { signup, login, getGames, postCart };
