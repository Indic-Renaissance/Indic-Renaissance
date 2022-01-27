import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AncientHome from "./components/screens/ancient/home/Home";
import FirstPage from "./components/screens/firstPage/FirstPage";
import MedievalHome from "./components/screens/medieval/home/Home";
import ModernHome from "./components/screens/modern/home/Home";

function App() {
  const background__home = "images/background_home.jpg";
  const Indic_template = "images/Indic_Template.jpg";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<FirstPage />} />
          <Route exact path="/ancient/home" element={<AncientHome />} />
          <Route exact path="/medieval/home" element={<MedievalHome />} />
          <Route exact path="/modern/home" element={<ModernHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
