import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Facts from './pages/Facts';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/favorites" component={Favorites} />
        <Route path="/facts" component={Facts} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
