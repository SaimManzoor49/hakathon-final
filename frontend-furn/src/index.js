import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './utils/Global'
import { ChakraProvider } from '@chakra-ui/react'
import ProductsContextProvider from './context/ProductsContext';
import AuthContextProvider from './context/AuthContext';


export const PORT = "http://localhost:8080"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>

     <ProductsContextProvider>
     <ChakraProvider>
    <App />
     </ChakraProvider>
     </ProductsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
