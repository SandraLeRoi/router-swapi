import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CharacterPages from "./Pages/CharacterPages"
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/personnage/:id" component={CharacterPages} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
