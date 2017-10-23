import React, { Component } from 'react';
import logo from './logo.svg';
import camioneta from './img/truck.svg';
import { ProgressBar } from 'react-bootstrap';
import { connect } from "redux-zero/react";
import { CrearPreguntas, ListarRespuestas, RedesSociales, Flechas } from './componentes.js';
import { getQuestion } from './actions.js';
import './App.css';

const App = ({ preguntas, contar, completo, comparar, respuestas }) => {
  const preguntaActual = preguntas[contar];
  return (
    <div className="container">
      <header className="text-center">
        {!completo && <img src={preguntaActual.imagen} />}
        {completo && <img src={camioneta} />}
      </header>
      <div className="content">
        {!comparar &&
          <div id="progreso">
            <div className="progress-label">
              {respuestas.length} of {5} answered
            </div>
            <ProgressBar now={respuestas.length * 20} />
          </div>
        }
        <div id="prueba">
          {!completo && <CrearPreguntas question={preguntaActual} />}
          {completo && <ListarRespuestas comparar={comparar} respuestas={respuestas} preguntas={preguntas} />}
        </div>
        <RedesSociales />
      </div>

    </div>);
}
/*{!comparar && respuestas.length != 0 &&
        <Flechas />
      }*/
const mapToProps = ({ preguntas, contar, completo, comparar, respuestas }) => ({ preguntas, contar, completo, comparar, respuestas });
export default connect(mapToProps)(App);
