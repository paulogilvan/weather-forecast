import { useState } from 'react';
import axios from 'axios';
import { Weather } from './components/Weather';
import * as C from './globalStyles';

const App = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Erro ao buscar a previsão do tempo:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <C.Container>
      <C.Title>Previsão do Tempo</C.Title>
      <C.SearchContainer>
        <C.Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Digite o nome da cidade"
        />
        <C.Button onClick={fetchWeather} disabled={loading}>
          {loading ? 'Carregando...' : 'Buscar'}
        </C.Button>
      </C.SearchContainer>
      {weatherData && <Weather data={weatherData} />}
    </C.Container>
  )
}

export default App;
