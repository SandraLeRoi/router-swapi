import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CharacterPages from "./Pages/CharacterPages"
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/character/:id" component={CharacterPages} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
