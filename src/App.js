import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/page/:page" element={<Home />} exact />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
