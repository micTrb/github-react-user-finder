import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import './App.css';


import Search from "./atomic-design/molecules/Search/Search";
import Landing from "./atomic-design/pages/Landing/Landing";
import Users from "./atomic-design/pages/Users/Users";
import Companies from "./atomic-design/pages/Companies/Companies";
import NavTabs from "./atomic-design/organisms/NavTabs/NavTabs";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <h1>Github React Users/Companies finder</h1>
          <Search/>
          <Routes>
            <Route index path="/" element={<Landing />} />
            <Route path="/users" element={<Users />} />
            <Route path="/companies" element={<Companies />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
