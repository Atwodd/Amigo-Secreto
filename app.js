// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigos(){
    let input = document.getElementById('amigo');
    let nombre = input.value;

    if(nombre !== "" && !amigos.includes(nombre)){
        amigos.push(nombre);
        input.value = "";
        input.focus(); //coloca el cursor dentro del input para enseguida escribir un nuevo nombre.
        actualizarLista(amigos);

    }else{
        alert("Por favor, ingresa un nombre valido y que no esté repetido.");
    }
    
}

function actualizarLista(amigos){
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";

        for(let i=0; i<amigos.length; i++){
            let li = document.createElement("li");
            li.textContent = amigos[i];
            lista.appendChild(li);
        }
    }

function sortearAmigo(){
    if(amigos.length === 0){
        alert("No has agregado amigos en la lista para hacer el sorteo");
        return;
    }

    let hacerSorteo = Math.floor(Math.random()* amigos.length);
    let amigoGanador = amigos[hacerSorteo];

    document.getElementById("resultado").innerHTML = `Amigo ganador: <strong>${amigoGanador}</strong>`;
}



