// Salvar os dados
let form = document.querySelector('form');
let nome = document.querySelector('nome');
let idade = document.querySelector('idade');
let email = document.querySelector('email');
let tel = document.querySelector('tel');
let sexo = document.getElementById('sexo');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let novo = new Array();
    novo.nome = this.nome.value;
    novo.idade = this.idade.value;
    novo.email = this.email.value;
    novo.tel = this.tel.value;
    novo.sexo = this.sexo.value;
    console.log(novo);
})

