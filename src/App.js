import Cart from "./components/cart/Cart.js";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Provider from './components/contextAPI/Provider.js';
import Home from "./pages/Home/Home.js";
import Checkout from "./components/checkout/Checkout.js";
import Success from "./components/success/Success.js";
import Description from "./pages/Description/Description.js";
import SignUp from "./components/SignUp/SignUp.js";
import Login from "./components/Login/Login.js";

function App() {
  return (
    <BrowserRouter>
      {/* <h1>RFRGames</h1> */}

      <GlobalStyle />

      <Provider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/description/:id" element={<Description />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
