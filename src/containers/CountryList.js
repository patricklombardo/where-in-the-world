import React from 'react';
import Navbar from '../components/Navbar';
import CountryCard from '../components/CountryCard';

export const CountryList = ({ countries }) => {
  const testCountry = countries[0];
  console.log(countries);
  return (
    <div className="container">
      {countries.map(country => (
        <CountryCard country={country} />
      ))}
    </div>
  );
};

export default CountryList;
