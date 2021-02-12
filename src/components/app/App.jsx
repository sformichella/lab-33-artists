import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ArtistsContainer from '../containers/ArtistsContainer/ArtistsContainer';
import ReleasesContainer from '../containers/ReleasesContainer/ReleasesContainer';
import RecordingsContainer from '../containers/RecordingsContainer/RecordingsContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path = "/"
          render = {routerProps => <ArtistsContainer {...routerProps}/>}
        />
        <Route
          exact
          path = "/artist/:id"
          render = {routerProps => <ReleasesContainer {...routerProps}/>}
        />
        <Route
          exact
          path = "/release/:id"
          render = {routerProps => <RecordingsContainer {...routerProps}/>}
        />
      </Switch>
    </Router>
  );
}
