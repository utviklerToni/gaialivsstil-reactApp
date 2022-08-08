import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './assets/fonts/Rubik/static/Rubik-Black.ttf';
import './assets/fonts/Rubik/static/Rubik-BlackItalic.ttf';
import './assets/fonts/Rubik/static/Rubik-Bold.ttf';
import './assets/fonts/Rubik/static/Rubik-BoldItalic.ttf';
import './assets/fonts/Rubik/static/Rubik-ExtraBold.ttf';
import './assets/fonts/Rubik/static/Rubik-ExtraBoldItalic.ttf';
import './assets/fonts/Rubik/static/Rubik-Italic.ttf';
import './assets/fonts/Rubik/static/Rubik-Light.ttf';
import './assets/fonts/Rubik/static/Rubik-LightItalic.ttf';
import './assets/fonts/Rubik/static/Rubik-Medium.ttf';
import './assets/fonts/Rubik/static/Rubik-MediumItalic.ttf';
import './assets/fonts/Rubik/static/Rubik-Regular.ttf';
import './assets/fonts/Rubik/static/Rubik-SemiBold.ttf';
import './assets/fonts/Rubik/static/Rubik-SemiBoldItalic.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </React.StrictMode>
);
