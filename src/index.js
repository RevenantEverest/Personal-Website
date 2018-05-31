import React from 'react';
import ReactDOM from 'react-dom';
import './public/style/index.css';
import './public/style/index(MobileL).css';
import './public/style/index(MobileM).css';
import './public/style/index(MobileS).css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
