import React from 'react';
import './App.css';
import { Route} from "react-router-dom";
import Links from "./components/Links"
import Countries from "./components/Countries"
import SingleCountry from "./components/SingleCountry"

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Links} />
      <Route path="/countries" exact component={Countries} />
      <Route path="/countries/:code" exact component={SingleCountry} />
    </div>
  );
}

export default App;
