import Cart from "./components/cart/Cart.js";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Provider from './components/contextAPI/Provider.js';
import Home from "./pages/Home/Home.js";


function App() {
  return (
    <BrowserRouter>

      {/* <h1>RFRGames</h1> */}

      <GlobalStyle />

      <Provider>
        <Routes>

          <Route path="/cart" element={<Cart />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </Provider>

    </BrowserRouter>
  );
}

export default App;
