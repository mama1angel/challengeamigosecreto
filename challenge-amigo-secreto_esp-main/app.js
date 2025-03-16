// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(){

    let nombre = document.getElementById("amigo").value;
    if(nombre != ""){
        amigos.push(nombre);
        console.log(`${nombre} agregado a la lista.`);
        alert(`${nombre} agregado a la lista.`);
    }else{
        console.log("Por favor,ingresa un nombre valido.");
        alert("Por favor,ingresa un nombre valido.");
    }

     document.getElementById("amigo").value ="";

}

function sortearAmigo(){
    if(amigos.length===0){ 
        console.log("No hay amigoas en la lista para sortear.");
        alert("No hay amigoas en la lista para sortear.");
        return;
    }
        
    
    const indiceAleatorio = Math.floor(Math.random()*amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    
    console.log(`El amigo secreto es: ${amigoSecreto}`);
    alert(`El amigo secreto es: ${amigoSecreto}`);

}
