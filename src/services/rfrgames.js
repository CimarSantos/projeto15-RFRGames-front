import axios from "axios";

const urlBase = process.env.REACT_APP_API_BASE_URL;

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("rfrgames"));
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
  return axios.post(`https://rfrgames.onrender.com/login`, body);
}

function getGames() {
  return axios.get("http://localhost:5000/games");
}

function getCart() {
  const config = createHeaders();
  return axios.get(`${urlBase}/cart`, config);
}

function postCart(selected) {
  //testando com o token aleatório
  const config = {
    headers: {
      Authorization: "Bearer 1235847352",
    },
  };
  return axios.post("http://localhost:5000/cart", selected, config);
}

function deleteCart(id) {
  const config = createHeaders();
  return axios.delete(`${urlBase}/cart/${id}`, config);
}

export { signup, login, getGames, postCart };
