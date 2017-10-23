import React, { Component } from 'react';

export const RedesSociales = () => {
  return (
    <div id="redesSociales" className="text-center">
      <a href="#" className="fa-stack fa-lg" style={{ color: '#00C3FF' }}>
        <i className="fa fa-circle fa-stack-2x"></i>
        <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
      </a>
      <a href="#" className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x" style={{ color: '#23239B' }}></i>
        <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
      </a>
      <a href="#" className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x" style={{ color: 'red' }}></i>
        <i className="fa fa-google-plus fa-stack-1x fa-inverse"></i>
      </a>
    </div>
  );
}

const Opciones = ({ model, opciones }) => {
  return (
    <div className="opciones row">
      {Object.keys(opciones).map((key, index) => {
        let value = opciones[key];
        return (
          <div className={model.respuestas[model.contar] == value ? 'col-md-4 seleccionado' : 'col-md-4'}>
            <button className='btn' key={index} onClick={(e) => model.guardarRespuesta(value)}><span className='letra'>{key}</span>{value}</button>
          </div>
        );
      })}
    </div>
  );
}

export const CrearPreguntas = ({ model }) => {
  return (
    <div>
      <h1 className="text-center"> {model.preguntas[model.contar].pregunta} </h1>
      <Opciones model={model} opciones={model.preguntas[model.contar].opciones} />
    </div>
  );
}

export const ListarRespuestas = ({ model }) => {
  let expresion = model.correctas ? (model.correctas === model.preguntas.length ? 'Wow, ' : '') : 'Ooops, ';
  return (
    <div id='respuestas'>
      <h1 className="text-center">
        {!model.comparar && 'Here are you answers:'}
        {model.comparar && expresion + model.correctas + ' out of ' + model.preguntas.length + ' correct!'}
      </h1>
      {
        model.respuestas.map((item, index) => {
          let clase = model.comparar ? (item == model.preguntas[index].respuesta ? 'text-success' : 'text-danger') : '';
          let contenido = clase == 'text-danger' ? <strong><strike>{item}</strike> {model.preguntas[index].respuesta}</strong> : <strong>{item}</strong>;
          return <p className={clase}>{index + 1}. {model.preguntas[index].pregunta} {contenido}</p>;
        })
      }
      <div className='text-center'>
        {model.comparar && <button className='btn-lg btn-dark' onClick={() => model.reiniciar()}>Start Again</button>}
        {!model.comparar && <button className='btn-lg btn-dark' onClick={() => model.compararRespuestas()}>Submit</button>}
      </div>

    </div>
  );
}
