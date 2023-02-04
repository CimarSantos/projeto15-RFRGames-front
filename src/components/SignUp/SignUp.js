import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Logo from "../../assets/imgs/Logotipo.png";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const Signup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas digitadas não coincidem!");
      return;
    }

    const request = axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, {
      name,
      email,
      image,
      password,
      confirmPassword,
    });
    request
      .then((res) => {
        console.log(res.data);
        alert(
          `Seu cadastro foi feito com sucesso! Você será direcionado para fazer o Login!`
        );
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setName("");
        setEmail("");
        setImage("");
        setPassword("");
        setConfirmPassword("");

        alert(`${err.response} Tente novamente`);
      });
  };
  return (
    <>
      <LogoContainer className="flex">
        <img src={Logo} alt="RFRGames" />
      </LogoContainer>
      <FormStyle className="flex" onSubmit={Signup}>
        <input
          type="text"
          placeholder="Nome"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="url"
          placeholder="Link da sua foto"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
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
        <input
          type="password"
          placeholder="Confirme a senha"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </FormStyle>
      <Link to="/">
        <LoginCadastro className="flex">
          <p>Já tem uma conta? Entre agora!</p>
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
  }
`;

const LogoContainer = styled.div`
  justify-content: center;
  padding: 10% 0 5% 0;
  img {
    width: 300px;
  }
`;
