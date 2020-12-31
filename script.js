const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.mins-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000)

function odliczanie(){
    let wynik = document.querySelector('#wynik');
let dzis=new Date()
 let nowyRok=new Date("December 31, 2020 23:59:59");
 let godziny =1000*60*60;
 wynik.innerHTML='Nowy ROK za: ' +((nowyRok.getTime()-dzis.getTime()))/godziny+' h';
if((nowyRok.getTime()-dzis.getTime())==0){
alert('Szczęśliwego Nowego 2021 Roku')
}
}
setInterval(odliczanie, 1000)