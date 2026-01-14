import { useState } from 'react';
import weatherService from '../Services/weather.js';

const CountryDisplay = ({ filtered = [], selectedCountry = null }) => {
  const country = selectedCountry || (filtered.length === 1 ? filtered[0] : null);
  const [weather, setWeather] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [weatherError, setWeatherError] = useState(null);

  if (!country) return null;

  const fetchWeather = async () => {
    const lat = country.latlng?.[0];
    const lon = country.latlng?.[1];
    if (lat == null || lon == null) {
      setWeatherError('No coordinates available for this country');
      return;
    }

    setLoadingWeather(true);
    setWeatherError(null);
    try {
      const data = await weatherService.getByCoords(lat, lon);
      setWeather(data);
    } catch (err) {
      setWeatherError(err.message || 'Failed to fetch weather');
    } finally {
      setLoadingWeather(false);
    }
  };

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>
        {country.capital?.join(', ')}
        <br />
        Area: {country.area}
      </p>

      <h2>Languages</h2>
      {country.languages ? (
        <ul>
          {Object.values(country.languages).map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      ) : (
        <p>No languages listed</p>
      )}

      {country.flags?.png && (
        <img src={country.flags.png} alt={`Flag of ${country.name?.common}`} />
      )}

      <div style={{ marginTop: '1rem' }}>
        <button type="button" onClick={fetchWeather} disabled={loadingWeather}>
          {loadingWeather ? 'Loading...' : 'Show weather'}
        </button>

        {weatherError && <p style={{ color: 'red' }}>{weatherError}</p>}

        {weather && (
          <div style={{ marginTop: '0.5rem' }}>
            <h3>Weather in {country.name.common}</h3>
            <p>Temperature: {weather.main?.temp} °C</p>
            <p>Condition: {weather.weather?.[0]?.description}</p>
            <p>Wind: {weather.wind?.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDisplay;