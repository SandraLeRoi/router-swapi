import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CharacterPages from "./Pages/CharacterPages";
import ListCharacter from "./Pages/ListCharacter";
import ListPlanet from "./Pages/ListPlanet";
import PlanetPages from "./Pages/PlanetPages";
import ListStarships from "./Pages/ListStarships";
import StarshipsPages from "./Pages/StarshipsPages";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/character" component={ListCharacter} />
            <Route exact path="/planet" component={ListPlanet} />
            <Route exact path="/starships" component={ListStarships} />
            <Route path="/character/:id" component={CharacterPages} />
            <Route path="/planet/:id" component={PlanetPages} />
            <Route path="/starships/:id" component={StarshipsPages} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
