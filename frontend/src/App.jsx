import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from "./components/Nav";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
