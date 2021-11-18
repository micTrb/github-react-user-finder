import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./store";
import './App.css';


import Search from "./atomic-design/molecules/Search/Search";
import Landing from "./atomic-design/pages/Landing";
import Users from "./atomic-design/pages/Users";
import Companies from "./atomic-design/pages/Companies";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <h1>Github React Users/Companies finder</h1>
          <Search/>
          <Routes>
            <Route exact path="/" component={Landing} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/companies" component={Companies} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
