import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components'; //Theme을 import해줘야함.
import App from './App';

const darkTheme = {
  textColor:"whitesmoke",
  backgroundColor: "#111"
}

const lightTheme = {
  textColor:"#111",
  backgroundColor: "whitesmke",
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}> {/**Theme은 하나의 prop가 필요하다 */}
      <App /> 
{/**ThemeProvider 안에 App컴포넌트가 있어서 모든 컴포넌트는 object에 접근 가능하다. */}
    </ThemeProvider> 
  </React.StrictMode>
);



