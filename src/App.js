import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Insert from "./DBoperations/Operations";
import FetchData from "./DBoperations/FetchData";
import Menu from "./menu/Menu";

function App() {
  return (
    <>
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/fetch">fetch Data</Link>
              </li>
              <li>
                <Link to="/menu">menu</Link>
              </li>
            </ul>
          </nav> */}

          <Routes>
            <Route path="/fetch" element={<FetchData />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </div>
      </Router>
    </>
  );
  // return (
  //   <>
  //     <Menu />
  //     <Insert />
  //   </>
  // );
}

export default App;
