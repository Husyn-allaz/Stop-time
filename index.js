// setTimeout saniyeden sonra bir defe cagirir

// function f() {
//     console.log('Cagirildi');

// }

// let b = setTimeout(f,3000)

// document.querySelector("button").addEventListener("click",function() {
//     clearTimeout(b)
// })

// console.log("b",b);

// setInterval saniyekecdikce her defe cagirir

// function f() {
//     console.log("-------");
//     console.log('Cagirildi');
//     console.log("-------");

// }

// let b = setInterval(f,2000)

// document.querySelector("button").addEventListener("click",function() {
//     clearInterval(b)
// })

// console.log("b",b);


// Time App

let saniyeler = 0
let stopValue = null
let timeContent = document.querySelector("h2")

function timeParse(san){
    let deqiqe = Math.floor(san / 60)
    let qaliqSaniyeler = san -  deqiqe *60

    let timeResult = `${deqiqe < 10 ? "0" + deqiqe : deqiqe}:${
        qaliqSaniyeler < 10 ? "0" + qaliqSaniyeler : qaliqSaniyeler
    }`;

    return timeResult
}

document.querySelector("#startTime").addEventListener("click",function(){
    clearInterval(stopValue);
    stopValue = setInterval(()=>{
    saniyeler++;
    let netice = timeParse(saniyeler);
    timeContent.innerHTML = netice
},1000)
});



document.querySelector("#stopTime").addEventListener("click",function(){
    clearInterval(stopValue)
});


document.querySelector("#resetTime").addEventListener("click",function(){
    saniyeler = 0
    timeContent.innerHTML = "00:00"
});





