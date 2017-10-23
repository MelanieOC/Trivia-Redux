import React, { Component } from 'react';
import logo from './logo.svg';
import camioneta from './img/truck.svg';
import { Image } from 'react-bootstrap';
import { connect } from "redux-zero/react";
import { CrearPreguntas, ListarRespuestas, RedesSociales, Flechas, BarraProgreso } from './componentes.js';
import { getQuestion } from './actions.js';
import './App.css';

const App = ({ preguntas, completo, comparar, respuestas }) => {
  const preguntaActual = getQuestion();
  return (
    <div className="container">
      <header className="text-center">
        {!completo && <Image src={preguntaActual.imagen} />}
        {completo && <Image src={camioneta} />}
      </header>
      <div className="content">
        {!comparar &&
          <BarraProgreso respuestas={respuestas.length} preguntas={preguntas.length} />
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
const mapToProps = ({ preguntas, completo, comparar, respuestas }) => ({ preguntas, completo, comparar, respuestas });
export default connect(mapToProps)(App);
