import React, { useState, useEffect } from 'react';

const useCountryData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch('https://restcountries.eu/rest/v2/all');
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    fetchCountryData();
  }, []);

  return { data, loading };
};

export default useCountryData;
