let images = ["img/football 1.jpg" ,"img/football2.jpg","img/football3.jpg","img/football4.jpg"] ;
let img = document.querySelector(".slide img")
img.setAttribute("src",images[0])
let currentslide = 0
let autorotation = 0

let BtnautoForward =document.querySelector("#autoforward")
let BtnForward =document.querySelector("#forward")
let Btnstop =document.querySelector("#stop")
let BtnautoBackward =document.querySelector("#autobackward")
let BtnBackward =document.querySelector("#backward")


BtnForward.addEventListener("click",goforward )
BtnBackward.addEventListener("click" ,gobackward)
Btnstop.addEventListener("click" ,gostop) // work this function lastly
BtnautoForward.addEventListener("click" ,goautoforward)
BtnautoBackward.addEventListener("click" ,goautobackward)

function goautoforward(){
rotator = setInterval (goforward, 3000) // first work with set interval later add rotation variable for gostop function
autorotation = 1
}
// autoroation = 1 mean rotation is going ; autortation = 0 means no rotation
function gostop(){
if (autorotation === 1){
clearInterval(rotator) 
autorotation = 0
}
}

function goautobackward(){
    rotator = setInterval (gobackward, 3000)
    autorotation = 1
    }

function goforward(){
currentslide = currentslide + 1;
if (currentslide > 3){
    currentslide =0;
}
img.setAttribute("src",images[currentslide])
}

function gobackward(){
    currentslide = currentslide - 1;
    if (currentslide <0){
        currentslide =3;
    } 
   
    img.setAttribute("src",images[currentslide])
}