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
    let preguntas = [...store.getState().preguntas];
    let contar = store.getState().contar;
    if (contar === preguntas.length - 1) {
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
    let preguntas = [...store.getState().preguntas];
    let contar = store.getState().contar;
    if (contar === preguntas.length) {
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
    let preguntas = [...store.getState().preguntas];
    let respuestas = [...store.getState().respuestas];
    return respuestas.filter((item, index) => item == preguntas[index].respuesta).length;
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
