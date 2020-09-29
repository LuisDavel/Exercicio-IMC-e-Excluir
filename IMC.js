var botaoAdicionar = document.getElementById('add');

var inputPeso = document.getElementById('peso');    
var inputAltura = document.getElementById('altura');

botaoAdicionar.addEventListener('click', adicionar);

function adicionar(){
    var p2 = document.getElementById('indice');
    var p = document.getElementById('notifica');

    var resultado =  (inputPeso.value / (inputAltura.value * inputAltura.value)).toFixed(2); 
    console.log(resultado);
    //window.alert(resultado)
    if(resultado < 16){
        p.innerText = 'IMC DE =' + ' ' + resultado;
        p2.style.color = " red";
        p2.innerText = "Magreza Grave";
        console.log(p2)
    }else if(resultado < 17){
        p.innerText = 'IMC DE =' + ' ' + resultado;
        p2.style.color = "orange";
        p2.innerText = "Magreza Moderada";
        
        console.log(p2)
    }else if(resultado < 18.5){
        p.innerText = 'IMC DE =' + ' ' + resultado;
        p2.style.color = "grey";
        p2.innerText = "Magreza Leve";
        
        console.log(p2)
    }else if(resultado < 25){
        p.innerText = 'IMC DE =' + ' ' + resultado;
        p2.style.color = "rgb(14, 211, 14)";
        p2.innerText = "Saudavel";
        
        console.log(p2)
    }else if(resultado < 30){
        p.innerText = 'IMC DE =' + ' ' + resultado;
        p2.style.color = " rgb(211, 211, 211)";
        p2.innerText = "Sobrepeso";
        
        console.log(p2)
    }else if(resultado < 35){
        p.innerText = 'IMC DE =' + ' ' + resultado;
        p2.style.color = "orange";
        p2.innerText = "Obesidade Grau I";
        console.log(p2)
    }else if(resultado < 40){
        p.innerText = 'IMC DE =' + ' ' + resultado;
        p2.style.color = "rgb(224, 4, 4)";
        p2.innerText = "Obesidade Grau II";
        console.log(p2)
    }else if(resultado >= 40){
        p.innerText = 'IMC DE =' + ' ' + resultado;
        p2.style.color = "rgb(143, 1, 1)";
        p2.innerText = "Obesidade Grau III";
        console.log(p2)
    };
    inputPeso.value = '';
    inputAltura.value = '';
    
}
