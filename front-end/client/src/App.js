import React from 'react';
import './App.css';
import { Route} from "react-router-dom";
import Links from "./components/Links"
import Countries from "./components/Countries"

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Links} />
      <Route path="/countries" exact component={Countries} />
    </div>
  );
}

export default App;
