class Model {
  constructor(preguntas) {
    this.preguntas = preguntas;
    this.marcar = true;
    this.contar = 0;
    this.respuestas = [];
    this.correctas = 0;
    this.completo = false;
    this.comparar = false;
  }
  guardarRespuesta(value) {
    if (this.marcar) {
      this.marcar = false;
      this.respuestas[this.contar] = value;
      let t = setTimeout(() => {
        this.marcar = true;
        this.siguiente();
      }, 700);
    }
    this.inform();
  }

  siguiente() {
    if (this.contar === this.preguntas.length - 1) {
      this.completo = true;
    }
    this.contar++;
    this.inform();
  }
  anterior() {
    if (this.contar === this.preguntas.length) {
      this.completo = false;
    }
    this.contar--;
    this.inform();
  }
  compararRespuestas() {
    this.comparar = true;
    this.correctas = this.respuestas.filter((item, index) => item == this.preguntas[index].respuesta).length;
    this.inform();
  }
  reiniciar() {
    this.contar = 0;
    this.respuestas = [];
    this.correctas = 0;
    this.completo = false;
    this.comparar = false;
    this.inform();
  }
  subscribe(render) {
    this.render = render;
  }
  inform() {
    this.render();
  }
}

export default Model;