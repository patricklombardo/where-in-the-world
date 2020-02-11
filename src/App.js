import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CountryList from './containers/CountryList';
import CountryDetail from './containers/CountryDetail';

function App() {
  return (
    <BrowserRouter>
      <Route exact path ="/">
        <CountryList />
      </Route>
      <Route>
        <CountryDetail exact path="'/:id"/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
