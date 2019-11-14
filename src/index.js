import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './Components/Login';
import Details from './Components/Details';
import Register from './Components/Register';
import Parent from './Components/Parent';
import FirstPage from './Components/FirstPage';
import Perfume from './Components/Perfume';

ReactDOM.render(<Perfume />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
