import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import InfoPopup from "./utils/components/Popup"
// React Routing
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import AnimatedCursor from "react-animated-cursor"
import "./App.css";
import "./assets/Style.css";
import "./assets/Responsive.css";


function App() {
  return (
    <>
      <div className="App">
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
    
    <InfoPopup/>

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
        backgroundColor: 'var(--theme-color)',
        zIndex : 999999999
       
      }}
      outerStyle={{
        border: '3px solid var(--theme-color)',
        zIndex : 999999999
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
