var botaoAdicionar = document.getElementById('adicionar');

var inputTarefa = document.getElementById('tarefa');

inputTarefa.onkeypress = function(){
    if(event.key === 'Enter'){
        adicionar();
    }
    console.log();
};

botaoAdicionar.onfocus = function(){
    console.log();
}

botaoAdicionar.onmouseover = function(){
    console.log();
}

botaoAdicionar.addEventListener('click', adicionar);

function adicionar(){
    console.log();

    var tarefa = inputTarefa.value;

    if (tarefa !== ''){

        var li = document.createElement('li');
        var ex = document.createElement('button');

        ex.innerText = 'Excluir';
        li.innerText = tarefa; 

        li.classList.add('para-fazer');
        li.onclick = function(){
            li.classList.remove('para-fazer');
            li.classList.add('concluida');
        }
        
        li.ondblclick = function(){
            li.classList.remove('concluida');
            li.classList.add('para-fazer');
        }

        ex.onclick = function(){
            ol.removeChild(li);
        }

        var ol = document.getElementById('tarefas');

        ol.appendChild(li);
        li.appendChild(ex);
        
        inputTarefa.value = '';
    }
};


   


