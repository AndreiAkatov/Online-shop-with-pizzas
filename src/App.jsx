import "./scss/app.scss";
import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
