import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/components/App';
import * as serviceWorker from './serviceWorker';

import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


const themegj=
   {
      "common": {
          "black": "#000",
          "white": "#fff"
      },
      "background": {
          "paper": "#fff",
          "default": "#fafafa"
      },
      "primary": {
          "light": "#7986cb",
          "main": "#575555",
          "dark": "#7d7d7d",
          "contrastText": "#fff"
      },
      "secondary": {
          "light": "#ff4081",
          "main": "#b0d5d1",
          "dark": "#c51162",
          "contrastText": "#fff"
      },
      "error": {
          "light": "#e57373",
          "main": "#f44336",
          "dark": "#d32f2f",
          "contrastText": "#fff"
      },
      "text": {
          "primary": "rgba(0, 0, 0, 0.87)",
          "secondary": "rgba(0, 0, 0, 0.54)",
          "disabled": "rgba(0, 0, 0, 0.38)",
          "hint": "rgba(0, 0, 0, 0.38)"
      }
  };

const custTheme = createMuiTheme({themegj});

ReactDOM.render(<ThemeProvider theme={custTheme}>
  <Router>  <App /></Router>
</ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();  
