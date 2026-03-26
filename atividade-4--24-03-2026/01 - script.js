/*Codigo feito por Bruno Ortega - Aluno de ESOFT3S-M-A*/
const lilGuy = document.getElementById("lilGuy");
const food = document.getElementById("food");
const easterEgg = document.getElementById("easterEgg");

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

const easterEggImages = [
    "ferlini1.jpeg",
    "ferlini2.jpeg",
    "ferlini3.jpeg",
    "ferlini4.jpeg",
    "ferlini5.jpeg",
    "ferlini6.jpeg",
    "ferlini7.jpeg"
];

let easterEggIndex = 0;

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
    }, 1);
    console.log(control);
}

function feed(){
    
    lilGuy.src = mood.eating;
    control = 0;

    console.log("Comendo");

    if(time_click) clearTimeout(time_click);

    time_click = setTimeout(() => {
        lilGuy.src = mood.happy;

        if(time_out) clearTimeout(time_out);
        time_out = setTimeout(() => {
            lilGuy.src = mood.idle;
        }, 2000);

    }, 1000);
}

function cycleEasterEgg(){
    easterEgg.src = easterEggImages[easterEggIndex];
    easterEggIndex = (easterEggIndex + 1) % easterEggImages.length;
}