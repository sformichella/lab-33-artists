import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ArtistsContainer from '../containers/ArtistsContainer/ArtistsContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          path = "/(:search)(/:page)"
          render = {routerProps => <ArtistsContainer {...routerProps}/>}
        />
      </Switch>
    </Router>
  );
}
