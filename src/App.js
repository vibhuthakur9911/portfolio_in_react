import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
// React Routing
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/Style.css";

import SideBar from "./utils/SideBar";
import React from "react";
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            {/* <Route path="blogs" element={<Blogs />} /> */}
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div className="App">
      <AnimatedCursor
      innerSize={8}
      outerSize={30}
      cursorInner = {12}
      cursorOuter = {14}
      color='85, 230, 165'
      // outerAlpha={0.2}
      outerAlpha={0.15}
      innerAlpha={0.2}
      innerScale={1}
      outerScale={1.5}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: '#55e6a5'
      }}
      outerStyle={{
        border: '3px solid #55e6a5'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
    </>
  );
}

export default App;
