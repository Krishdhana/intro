import "./App.scss";
import "antd/dist/antd.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import React from "react";
import { AnimatePresence } from "framer-motion";
import Apps from "./components/Apps/Apps";

function App() {
  let location = useLocation();

  return (
    <div className="d-flex">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="skills" element={<Skills />} />
            <Route path="apps" element={<Apps />} />
            <Route path="about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
