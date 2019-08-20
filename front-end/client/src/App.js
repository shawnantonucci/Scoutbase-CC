import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route} from "react-router-dom";
import Links from "./components/Links"

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Links} />
    </div>
  );
}

export default App;
