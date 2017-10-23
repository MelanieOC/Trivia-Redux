import React, { Component } from 'react';
import logo from './logo.svg';
import camioneta from './img/truck.svg';
import { ProgressBar } from 'react-bootstrap';
import { CrearPreguntas, ListarRespuestas, RedesSociales, Flechas } from './componentes.js';
import './App.css';

const App = ({ model }) => {
  return (
    <div className="container">
      <header className="text-center">
        {!model.completo && <img src={model.preguntas[model.contar].imagen} />}
        {model.completo && <img src={camioneta} />}
      </header>
      <div className="content">
        {!model.comparar &&
          <div id="progreso">
            <div className="progress-label">
              {model.respuestas.length} of {model.preguntas.length} answered
            </div>
            <ProgressBar now={model.respuestas.length * 20} />
          </div>
        }
        <div id="prueba">
          {!model.completo && <CrearPreguntas model={model} />}
          {model.completo && <ListarRespuestas model={model} />}
        </div>
        <RedesSociales />
      </div>
      {!model.comparar && model.respuestas.length != 0 &&
        <Flechas model={model} />
      }
    </div>);
}

export default App;
