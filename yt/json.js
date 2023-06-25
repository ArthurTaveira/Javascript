// notação de objeto js

//é uma forma de converter objteto em objeto e objeto em texto

//transmitir dados entre sistemas, pois o formato de texto é sempre lido pelas linguagens

//JSON.parse() - converte texto no padrao json para objetos

//JSON.stringinfy() = converte objetos em texto padrao jason

//objeto literal

const codigo = document.getElementById("codigo");
const carro = {
  marca: "fiat",

  modelo: "uno",
  ano: 2023,
};

let texto = JSON.stringify(carro);

codigo.innerHTML = texto;

let obj = JSON.parse(texto);

console.log(obj.modelo);

const ajax = new XMLHttpRequest();

ajax.open("GET", "https://viacep.com.br/ws/01001000/json/");
ajax.send();

ajax.onload = function () {
  codigo.innerHTML = this.responseText;
  let objeto = JSON.parse(this.responseText);
  //alert(objeto.ddd)
};

function buscarCEP() {
  let inputTexto = document.getElementById("cep").value;

  const ajax = new XMLHttpRequest();

  ajax.open("GET", "https://viacep.com.br/ws/" + inputTexto + "/json/");
  ajax.send();

  ajax.onload = function () {
    //transformei o texto em objeto
    let obj = JSON.parse(this.responseText);
    //peguei os valor que eu queria
    let localidade = obj.localidade;
    let cep = obj.cep;
    let uf = obj.uf
    document.getElementById('texto').innerHTML = "logradouro: " + localidade + "</br> Cep: " + cep + '</br> estado: ' + uf 
  }
}
