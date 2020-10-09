
function capturarDatos(){
    let nCasillas=parseInt(document.getElementById('txtCasillas').value);
    const resultado=calcularPosibilidades(nCasillas);
    if(resultado==0){
        document.getElementById('resultado').innerHTML='Número incorrecto';
        return;
    }
    document.getElementById('resultado').innerHTML=resultado.toString();
}

function calcularPosibilidades(n){
    let posibilidades=0;
    if(n>=1 && n<=6){
        posibilidades=Math.pow(2,n-1);
    }
    else if(n>6){
        posibilidades=Math.pow(2,n-1)-1;
    }
    else{
        console.log('Número Incorrecto');
    }
    return posibilidades;
}


