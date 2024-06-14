import styled from 'styled-components';

export const WeatherContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 1000px;
  height: 100vh;
  text-align: center;

  @media(max-width: 768px) {
    width: 100%;
    height: 100vh;
    
  }

  @media(max-width: 425px) {
    width: 100%;
    height: 100vh;    
  }
`;

export const WeatherTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #c0624b;
`;

export const WeatherItem = styled.div`
  margin-bottom: 15px;
  color: #c0624b;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid #ccc;
`;

export const ChartContainer = styled.div`
  margin-bottom: 20px;
`;