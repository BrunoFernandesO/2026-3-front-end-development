/*Codigo feito por Bruno Ortega - Aluno de ESOFT3S-M-A*/
const lilGuy = document.getElementById("lilGuy");
const food = document.getElementById("food");

const mood = {
    idle: "IdleLilGuy.png",
    eating: "EatingLilGuy.png",
    happy: "HappyLilGuy.png",
    enraged: "EnragedLilGuy.png",
    dead: "DeadLilGuy.png"
}

let control = 0;
let interval = null;
let time_click = null;
let time_out = null;

function controls(){
    if(interval) clearInterval(interval);
    interval = setInterval( () =>{
        control++;
        console.log("Tempo:", control);

        if(control==30){
            lilGuy.src = mood.enraged;
        }

        if(control == 60){
            lilGuy.src = mood.dead;
        }
    }, 500);
}

controls();