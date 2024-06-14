import { Line } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, LineElement, PointElement, Legend, Title } from 'chart.js';
Chart.register( LinearScale, CategoryScale, LineElement, PointElement, Legend, Title );
import * as C from './styles';

type Props = {
    data: any;
}

export const Weather = ({ data }: Props) => {
  const temperatures = data.list.map((item: any) => item.main.temp);
  const dates = data.list.map((item: any) => new Date(item.dt * 1000).toLocaleDateString());

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: temperatures,
        fill: false,
        backgroundColor: '#c0624b',
        borderColor: '#c0624b',
      },
    ],
  };

  return (
    <C.WeatherContainer>
      <C.WeatherTitle>Previsão para {data.city.name}</C.WeatherTitle>
      <C.ChartContainer>
        <Line data={chartData} />
      </C.ChartContainer>
      <div>
        {data.list.slice(0, 5).map((item: any, index: number) => (
          <C.WeatherItem key={index}>            
            <p>{new Date(item.dt * 1000).toLocaleString()}</p>
            <p>Temperatura: {item.main.temp} °C</p>
            <p>Condições: {item.weather[0].description}</p>            
          </C.WeatherItem>
        ))}
      </div>
    </C.WeatherContainer>
  );
}