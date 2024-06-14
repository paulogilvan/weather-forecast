import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

export const Button = styled.button`
  background-color: #c0624b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #b62c09;
  }

  &:disabled {
    background-color: #c0624b;
    opacity: 0.7;
    cursor: not-allowed;
  }
`;