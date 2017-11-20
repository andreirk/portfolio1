import React from 'react';
import {Provider} from 'react-redux';
import App from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
const jsx = (
    <App />
);


