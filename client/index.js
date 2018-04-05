// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';

// ReactDOM.render(<App />, document.getElementById('root'));
///////////////////////////////////////////////////////////////////////////////////////////
// //client/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { HashRouter } from 'react-router-dom'
// import Routes from './routes'



// ReactDOM.render(
//   <HashRouter>
//     <Routes />
//   </HashRouter>, document.getElementById('root')
// );
///////////////////////////////////////////////////////////////////////////////////////////
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};
