import React, { Component } from 'react';
import camioneta from './img/truck.svg';
import { Image } from 'react-bootstrap';
import { connect } from "redux-zero/react";
import { CrearPreguntas, ListarRespuestas, RedesSociales, Flechas, BarraProgreso } from './componentes.js';
import './App.css';

const App = ({ preguntas, contar, completo, comparar, respuestas, marcar }) => {
  const preguntaActual = preguntas[contar];
  return (
    <div className="container">
      <header>
        {!completo && <Image src={preguntaActual.imagen} />}
        {completo && <Image src={camioneta} />}
      </header>
      <div className="content">
        {!comparar &&
          <BarraProgreso respuestas={respuestas.length} preguntas={preguntas.length} />
        }
        <div id="prueba">
          {!completo && <CrearPreguntas question={preguntaActual} respuestas={respuestas} contar={contar} />}
          {completo && <ListarRespuestas comparar={comparar} respuestas={respuestas} preguntas={preguntas} />}
        </div>
        <RedesSociales />
      </div>
      {!comparar && respuestas.length != 0 &&
        <Flechas respuestas={respuestas.length} contar={contar} marcar={marcar} />
      }
    </div>);
}

const mapToProps = ({ preguntas, contar, completo, comparar, respuestas, marcar }) => ({ preguntas, contar, completo, comparar, respuestas, marcar });
export default connect(mapToProps)(App);
