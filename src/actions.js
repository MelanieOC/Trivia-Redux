import store from "./store";

export const getQuestion = () => {
    let questions = [...store.getState().preguntas];
    let index = store.getState().contar;
    return questions[index];
}

export const guardarRespuesta = (value) => {
    let res = [...store.getState().respuestas];
    let index = store.getState().contar;
    res[index] = value;
    store.setState({
        respuestas: res
    })
    siguiente();
}

export const siguiente = () => {
    let questions = [...store.getState().preguntas];
    let contar = store.getState().contar;
    if (contar === questions.length - 1) {
        store.setState({
            completo: true
        });
    }
    contar++;
    store.setState({
        contar: contar
    })
}
export const anterior = () => {
    let questions = [...store.getState().preguntas];
    let contar = store.getState().contar;
    contar--;
    store.setState({
        contar: contar
    })
}
export const getCorrects = () => {
    let questions = [...store.getState().preguntas];
    let answers = [...store.getState().respuestas];
    return answers.filter((item, index) => item == questions[index].respuesta).length;
}
export const compararRespuestas = () => {
    store.setState({
        comparar: true
    });
}

export const reiniciar = () => {
    store.setState({
        contar: 0,
        comparar: false,
        completo: false,
        respuestas: []
    });
}