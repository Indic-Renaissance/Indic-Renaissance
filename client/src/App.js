import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/screens/ancient/home/Home";
import FirstPage from "./components/screens/firstPage/FirstPage";

function App() {
  const background__home = "images/background_home.jpg";
  const Indic_template = "images/Indic_Template.jpg";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<FirstPage />} />
          <Route exact path="/ancient/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
