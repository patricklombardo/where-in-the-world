// Patrick Lombardo February 2020

import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CountryList from './containers/CountryList';
import CountryDetail from './containers/CountryDetail';
import useCountryData from './helpers/useCountryData';

const App = () => {
  const { data, loading } = useCountryData();
  console.log(data);

  return (
    <BrowserRouter>
      <Route exact path="/">
        <CountryList countries={data}/>
      </Route>
      <Route exact path="/foo">
        <CountryDetail />
      </Route>
    </BrowserRouter>
  );
};

export default App;
