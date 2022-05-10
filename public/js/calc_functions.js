var valor1 = ""
var mostrar = ""
function atualizarDisplay(btn){
    const display = document.getElementById('display');
    valor1 = valor1 + btn.value;
    
    if(display.value === '0') display.value = btn.value;
    else display.value += btn.value;
    
    
}

function limparDisplay(){
    document.getElementById('display').value = '0';
    valor1 = ''
}

var operador = ''
function atualizarOperacao(btn){
    const display = document.getElementById('display');
    valor1 = btn.value;
    valor1 = parseFloat(display.value);
    
}

function calcularOperacao(){
    const display = document.getElementById('display');
    mostrar = valor1
    display.value = eval(mostrar);
    valor1= ""
    
   
}       

function manipularTeclado(){
    if(/[0-9]/.test(event.key))
        atualizarDisplay({value: event.key});
}
function raiz(){
    const display = document.getElementById('display');
    valor1 = parseFloat(display.value);
    display.value = Math.sqrt(valor1);
}
function expoente(){
    const display = document.getElementById('display');
    valor1 = parseFloat(display.value);
    display.value = valor1**2;
}
