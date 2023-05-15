import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Cart from "./Pages/Cart";
import "./styles.css";
import Home from "./Pages/Home";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
