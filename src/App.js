import './App.css';
import { Home } from "./components/Home";
import { Test } from './components/test';
import "./components/Common.css"
import React from "react";

const App=()=> {
  return (
    <div className="main">
      <Home/>
      <Test/>

    </div>
  );
}

export default App;
