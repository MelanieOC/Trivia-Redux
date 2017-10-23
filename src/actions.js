import store from "./store";

export const guardarRespuesta = (value) => {
    let res = [...store.getState().respuestas];
    let index = store.getState().contar;
    let marcar = store.getState().marcar;
    if (marcar) {
        res[index] = value;
        store.setState({
            marcar: false,
            respuestas: res
        })
        let t = setTimeout(() => {
            siguiente();
            store.setState({
                marcar: true
            })
        }, 700);
    }


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
    if (contar === questions.length) {
        store.setState({
            completo: false
        });
    }
    contar--;
    store.setState({
        contar: contar
    })
}
export const obtenerCorrectas = () => {
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
