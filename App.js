// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BreedListPage from './components/BreedListPage';
import BreedDetailPage from './components/BreedDetailPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BreedListPage} />
        <Route path="/breed/:breedId" component={BreedDetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
