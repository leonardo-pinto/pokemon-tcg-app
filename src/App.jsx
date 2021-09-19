import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DataProvider from './context/DataProvider';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Details from './pages/Details';
import Facts from './pages/Facts';

function App() {
  return (

    <DataProvider>
      <Header />
      <Switch>
        <Route path="/details/:id" component={Details} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/facts" component={Facts} />
        <Route exact path="/" component={Home} />
      </Switch>
    </DataProvider>

  );
}

export default App;
