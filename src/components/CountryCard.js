import React from 'react';

export const CountryCard = ({ country }) => {
  const { name, population, region, capital, flag } = country;
  return (
    <div className="card">
      <div className="card__flag">
        <img src={flag} />
      </div>
      <div className="card__description">
        <h2>{name}</h2>
        <p>
          <span>Population:</span>
          {population}
        </p>
        <p>
          <span>Region:</span>
          {region}
        </p>
        <p>
          <span>Capital:</span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
