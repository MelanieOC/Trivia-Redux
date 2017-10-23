import React, { Component } from 'react';
import left from './img/navigation-left-arrow.svg';
import right from './img/navigation-right-arrow.svg';
import { Row, Col, Image, Button, ProgressBar } from 'react-bootstrap';
import { siguiente, anterior, guardarRespuesta, compararRespuestas, obtenerCorrectas, reiniciar } from './actions.js';

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

export const BarraProgreso = ({ respuestas, preguntas }) => {
    return (
        <div id="progreso">
            <div className="progress-label">
                {respuestas} of {preguntas} answered
            </div>
            <ProgressBar now={respuestas * 20} />
        </div>
    );
}
const Opciones = ({ opciones, comparar }) => {
    return (
        <Row className="opciones">
            {Object.keys(opciones).map((key, index) => {
                let value = opciones[key];
                return (
                    <Col md={4} className={comparar===value ? 'seleccionado' : ''}>
                        <Button key={index} onClick={() => guardarRespuesta(value)}>
                            <span className='letra'>{key}</span>{value}
                        </Button>
                    </Col>
                );
            })}
        </Row>
    );
}

export const CrearPreguntas = ({ question, respuestas, contar }) => {
    return (
        <div>
            <h1 className="text-center"> {question.pregunta} </h1>
            <Opciones opciones={question.opciones} comparar={respuestas[contar]} />
        </div>
    );
}

export const ListarRespuestas = ({ comparar, preguntas, respuestas }) => {
    let correctas = obtenerCorrectas();
    let expresion = correctas ? (correctas === preguntas.length ? 'Wow, ' : '') : 'Ooops, ';
    return (
        <div id='respuestas'>
            <h1 className="text-center">
                {!comparar && 'Here are you answers:'}
                {comparar && expresion + correctas + ' out of ' + preguntas.length + ' correct!'}
            </h1>
            {
                respuestas.map((item, index) => {
                    let clase = comparar ? (item == preguntas[index].respuesta ? 'text-success' : 'text-danger') : '';
                    let contenido = clase == 'text-danger' ? <strong><strike>{item}</strike> {preguntas[index].respuesta}</strong> : <strong>{item}</strong>;
                    return <p className={clase}>{index + 1}. {preguntas[index].pregunta} {contenido}</p>;
                })
            }
            <div className='text-center'>
                {comparar && <Button className='btn-dark' bsSize="large" onClick={() => reiniciar()}>Start Again</Button>}
                {!comparar && <Button className='btn-dark' bsSize="large" onClick={() => compararRespuestas()}>Submit</Button>}
            </div>

        </div>
    );
}

export const Flechas = ({ respuestas, contar, marcar }) => {
    return (
        <div id="flechas" className="text-center">
            <Button id="anterior" disabled={!(respuestas >= contar && marcar && contar)} onClick={() => anterior()}>
                <Image src={left} alt="" responsive />
            </Button>
            <Button id="siguiente" disabled={!(respuestas > contar & marcar)} onClick={() => siguiente()}>
                <Image src={right} alt="" responsive />
            </Button>
        </div>
    );
}