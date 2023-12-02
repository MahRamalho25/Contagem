const btn_imc = document.getElementById("calcular");

btn_imc.addEventListener("click", function soma (){
const peso= parseInt(document.getElementById("peso").value);                          //tanto faz usar o parseInt ou Number
const altura= Number(document.getElementById("altura").value);
const total= document.getElementById("total");

const imc = (peso / (altura * altura)).toFixed(2);

total.textContent = imc;
});