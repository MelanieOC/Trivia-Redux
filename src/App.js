import React, { Component } from 'react';
import camioneta from './img/truck.svg';
import { Image, Grid } from 'react-bootstrap';
import { connect } from "redux-zero/react";
import { CrearPreguntas, ListarRespuestas, RedesSociales, Flechas, BarraProgreso } from './componentes.js';
import './App.css';

const App = ({ preguntas, contar, completo, comparar, respuestas, marcar }) => {
  const preguntaActual = preguntas[contar];
  return (
    <Grid>
      <header>
        {!completo && <Image src={preguntaActual.imagen} />}
        {completo && <Image src={camioneta} />}
      </header>
      <div className="content">
        {!comparar &&
          <BarraProgreso respuestas={respuestas.length} preguntas={preguntas.length} />
        }
        <div id="prueba">
          {!completo && <CrearPreguntas preguntaActual={preguntaActual} respuestas={respuestas} contar={contar} />}
          {completo && <ListarRespuestas comparar={comparar} respuestas={respuestas} preguntas={preguntas} />}
        </div>
        <RedesSociales />
      </div>
      {!comparar && respuestas.length != 0 &&
        <Flechas respuestas={respuestas.length} contar={contar} marcar={marcar} />
      }
    </Grid>);
}

const mapToProps = ({ preguntas, contar, completo, comparar, respuestas, marcar }) => ({ preguntas, contar, completo, comparar, respuestas, marcar });
export default connect(mapToProps)(App);
