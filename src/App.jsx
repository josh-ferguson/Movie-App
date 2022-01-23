import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Header} from "./component/Header";
import {WatchList} from "./component/WatchList";
import {Watched} from "./component/Watched";
import {Add} from "./component/Add";
import './App.css';
import "./lib/font-awesome/css/all.min.css";

import {GloabalProvider} from "./context/GlobalState";

function App() {
  return (
    <GloabalProvider>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<WatchList />}/>


          <Route path="/Watched" element={<Watched />}/>


          <Route path="/Add" element={<Add />}/>

        </Routes>
      </Router>
    </GloabalProvider>
  );
}

export default App;
