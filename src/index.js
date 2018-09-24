import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from './robots';
import App from './containers/App';

ReactDOM.render( 
    <App />
, document.getElementById('root'));
registerServiceWorker();
