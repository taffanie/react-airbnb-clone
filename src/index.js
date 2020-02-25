import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Hello from './components/hello';
// import * as serviceWorker from './serviceWorker';

// const root = <div>
//   <Hello firstName="Boris" lastName="Paillard" />
//   <Hello firstName="Romain" lastName="Paillard" />
// </div>;

// ReactDOM.render(root, document.getElementById('root'));

// Inside the <App /> component (App.js), will use flat

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
