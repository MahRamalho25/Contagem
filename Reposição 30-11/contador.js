const incrementar = document.getElementById("increment");
const decrementar = document.getElementById("decrement");
const resetar = document.getElementById("reset");
let count = 0;

incrementar.addEventListener("click", function(){
    let valor = document.getElementById("valor");
    count++

    valor.innerHTML = count;
})
decrementar.addEventListener("click", function(){
    let valor = document.getElementById("valor");
    count--
    if(count<0){
        count=0;
    }
    valor.innerHTML = count;
})
resetar.addEventListener("click", function(){
    let valor = document.getElementById("valor");
    count = 0;

    valor.innerHTML = count;
})