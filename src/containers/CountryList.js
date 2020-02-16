import React from 'react'
import Navbar from '../components/Navbar';
import Card from '../components/Card';

export const CountryList = ({countries }) => {
  const testCountry = countries[0];
  console.log(testCountry);

  return (
    <div>
      <Navbar />
      <Card country={testCountry} />

    </div>
  )
}

export default CountryList;
