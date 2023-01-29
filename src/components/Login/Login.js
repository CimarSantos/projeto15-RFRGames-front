import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/imgs/Logotipo.png";
import { useState, useContext } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* const { setToken } = useContext(UserContext);
  const { setUser } = useContext(UserContext); */
  const handleForm = (e) => {
    e.preventDefault();
    const body = { email: email, password: password };
    axios
      .post(`https://rfrgames.onrender.com/login`, body)
      .then((res) => {
        /* setToken(res.data.token);
        setUser(res.data); */
        navigate("/home");
      })
      .catch((err) => {
        alert(`${err.response.data.message} Tente novamente!`);
      });
  };
  return (
    <>
      <LogoContainer className="flex">
        <img src={Logo} alt="RFRGames" />
      </LogoContainer>
      <FormStyle className="flex" onSubmit={handleForm}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">{"Entrar"}</button>
      </FormStyle>
      <Link to="/sign-up">
        <LoginCadastro className="flex">
          <p>Aina não tem uma conta? Cadastre-se agora!</p>
        </LoginCadastro>
      </Link>
    </>
  );
}

const LoginCadastro = styled.div`
  justify-content: center;
  padding: 30px 0;
  p {
    cursor: pointer;
    color: #ff74c7;
    font-size: 14px;
    text-decoration: none;
  }
`;

const FormStyle = styled.form`
  margin-top: 20px;
  flex-direction: column;
  gap: 10px;
  input {
    width: 303px;
    height: 45px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding: 15px;
    font-size: 20px;
  }
  button {
    width: 303px;
    height: 45px;
    border: none;
    background-color: #dd5e70;
    border-radius: 5px;
    font-size: 21px;
    color: #fff;
    cursor: pointer;
  }
`;

const LogoContainer = styled.div`
  justify-content: center;
  padding: 10% 0 5% 0;
  img {
    width: 300px;
  }
`;
