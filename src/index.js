import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Model from './Model';
import preguntas from './store.js'
import registerServiceWorker from './registerServiceWorker';

let model = new Model(preguntas);
let render = () => {
  ReactDOM.render(
    <App model={model} />,
    document.getElementById('root')
  );
};

model.subscribe(render);
render(); 
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
