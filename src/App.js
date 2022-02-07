import './App.css';
import React from 'react';
import {  Route, Switch } from "react-router-dom";
import { About, Game, Home, JoinGame, Leaderboard, NewGame, Players } from './pages';
import Intro from './pages/Intro';


function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/menu" component={Home} />
        <>
          {/* <Container> */}
            <Switch>
              <Route path="/create" component={NewGame} />
              <Route path="/players" component={Players} />
              <Route path="/join" component={JoinGame} />
              <Route path="/game/:code" component={Game} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/about" component={About} />
              {/* <Route component={NotFound} /> */}
            </Switch>
          {/* </Container> */}
        </>
      </Switch>
    </div>
  );
}

export default App;
