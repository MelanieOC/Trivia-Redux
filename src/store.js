import createStore from "redux-zero";
import avion from './img/plane.svg';
import barco from './img/ship.svg';
import bicicleta from './img/bycicle.svg';
import bus from './img/bus.svg';
import carro from './img/car.svg';

const preguntas = [
    {
        pregunta: 'Which is the oldest airline in the world?',
        opciones: { A: 'Avianca', B: 'KLM', C: 'Qantas' },
        respuesta: 'KLM',
        imagen: avion
    },
    {
        pregunta: 'Which is the largest port in the world?',
        opciones: { A: 'Port of Shanghai', B: 'Port of Singapore', C: 'Port of Rotterdam' },
        respuesta: 'Port of Shanghai',
        imagen: barco
    },
    {
        pregunta: 'What is the longest distance cycling backwards?',
        opciones: { A: '89.30 km', B: '675.10 km', C: '337.60 km' },
        respuesta: '337.60 km',
        imagen: bicicleta
    },
    {
        pregunta: 'What is the highest speed ever reached by a school bus?',
        opciones: { A: '590 km/h', B: '320 km/h', C: '245 km/h' },
        respuesta: '590 km/h',
        imagen: bus
    },
    {
        pregunta: 'What is the longest car trip on one tank of gas?',
        opciones: { A: '2617 km', B: '3568 km', C: '1732 km' },
        respuesta: '2617 km',
        imagen: carro
    }
]

const initialState = {
    preguntas: preguntas,
    contar: 0,
    completo: false,
    comparar: false,
    respuestas:[]
};

const store = createStore(initialState);

export default store;
