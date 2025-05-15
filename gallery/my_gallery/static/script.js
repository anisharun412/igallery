const imgs = document.querySelectorAll("img");

var model = document.getElementById("model");
var modelImg = document.getElementById("img");
var close = document.getElementById("close");

for(let i=0; i<imgs.length; i++){
    imgs[i].addEventListener("click", function(){
        model.style.display = "flex";
        modelImg.src = imgs[i].src;
        modelImg.alt = imgs[i].alt;
    })
    
}
close.addEventListener("click", function(){
        model.style.display = "none";
    })