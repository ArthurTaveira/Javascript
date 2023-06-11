class ValidaFormulario {
  constructor(){
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {this.handleSubmit(e)}
    )}

    handleSubmit(e){
      e.preventDefoult();
      console.log('N FOII')
    }
}

const valida = 
new ValidaFormulario();