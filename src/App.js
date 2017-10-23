import React, { Component } from 'react';
import logo from './logo.svg';
import {CrearPreguntas, ListarRespuestas, RedesSociales} from './componentes.js';
import './App.css';

const App = ({ model }) => {
  return (
    <div className="container">
      <header className="text-center">
        {!model.completo && <img src={model.preguntas[model.contar].imagen} />}
        {model.completo && <img src="assets/img/truck.svg" />}
      </header>
      <div className="content">
        {!model.comparar &&
          <div id="progreso">
            <div className="progress-label">
              {model.respuestas.length} of {model.preguntas.length} answered
          </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuemax="100" style={{ width: model.respuestas.length * 20 + '%', height: '5px' }}>
              </div>
            </div>
          </div>
        }
        <div id="prueba">
          {!model.completo && <CrearPreguntas model={model} />}
          {model.completo && <ListarRespuestas model={model} />}
        </div>
        <RedesSociales />
      </div>
      {!model.comparar && model.respuestas.length != 0 &&
        <div id="flechas" className="text-center">
          <button id="anterior" className={model.respuestas.length >= model.contar && model.marcar && model.contar ? 'btn' : "btn disabled"} onClick={() => model.anterior()}>
            <img className="img-responsive" src="assets/img/navigation-left-arrow.svg" alt="" />
          </button>
          <button id="siguiente" className={model.respuestas.length > model.contar & model.marcar ? 'btn' : "btn disabled"} onClick={() => model.siguiente()}>
            <img className="img-responsive" src="assets/img/navigation-right-arrow.svg" alt="" />
          </button>
        </div>
      }
    </div>);
}

export default App;
