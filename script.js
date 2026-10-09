//BARRA 1
var cont = 0;
const barra = document.getElementById("Barra"); 

while(cont < 40){
    cont = cont + 1;
    console.log(cont);
}

barra.style.setProperty('--progresso', cont + '%');

//BARRA 2

var cont = 0;
const barra2 = document.getElementById("Barra2"); 

while(cont < 65){
    cont = cont + 1;
    console.log(cont);
}

barra2.style.setProperty('--progresso', cont + '%');

//BARRA 3

var cont = 0;
const barra3 = document.getElementById("Barra3"); 

while(cont < 55){
    cont = cont + 1;
    console.log(cont);
}

barra3.style.setProperty('--progresso', cont + '%');

//BARRA 4

var cont = 0;
const barra4 = document.getElementById("Barra4"); 

while(cont < 10){
    cont = cont + 1;
    console.log(cont);
}

barra4.style.setProperty('--progresso', cont + '%');

//BARRA 5

var cont = 0;
const barra5 = document.getElementById("Barra5"); 

while(cont < 70){
    cont = cont + 1;
    console.log(cont);
}

barra5.style.setProperty('--progresso', cont + '%');

//ANIMAÇÃO 1

let x = document.getElementById('TextoCs');
let xx = 0;
let meuTimer;


function dada1(c) {
    xx = xx + c;
    x.innerHTML = xx;
    console.log(xx);

    if (xx >= 40) {
        clearInterval(meuTimer);
    }
}
meuTimer = setInterval(()=>{dada1(1)}, 30);  

//ANIMAÇÃO 2

let y = document.getElementById('TextoCs2');
let yy = 0;
let meuTimer2;


function dada2(c) {
    yy = yy + c;
    y.innerHTML = yy;
    console.log(yy);

    if (yy >= 65) {
        clearInterval(meuTimer2);
    }
}
meuTimer2 = setInterval(()=>{dada2(1)}, 20);  

//ANIMAÇÃO 3

let z = document.getElementById('TextoCs3');
let zz = 0;
let meuTimer3;


function dada3(c) {
    zz = zz + c;
    z.innerHTML = zz;
    console.log(zz);

    if (yy >= 55) {
        clearInterval(meuTimer3);
    }
}
meuTimer3 = setInterval(()=>{dada3(1)}, 20);  

//ANIMAÇÃO 4

let m = document.getElementById('TextoCs4');
let mm = 0;
let meuTimer4;


function dada4(c) {
    mm = mm + c;
    m.innerHTML = mm;
    console.log(mm);

    if (yy >= 10) {
        clearInterval(meuTimer4);
    }
}
meuTimer4 = setInterval(()=>{dada4(1)}, 20);  

//ANIMAÇÃO 5

let n = document.getElementById('TextoCs5');
let nn = 0;
let meuTimer5;


function dada5(c) {
    nn = nn + c;
    n.innerHTML = nn;
    console.log(nn);

    if (nn >= 70) {
        clearInterval(meuTimer5);
    }
}
meuTimer5 = setInterval(()=>{dada5(1)}, 17);  