# Ex.08 Design of Interactive Image Gallery
## Date: 15-05-2025

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :

HTML

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <header>
        <p>iGallery</p>
    </header>
    <div id="info">
        <h1>iGallery</h1><br>
        <h2>Welcome to iGallery, your personal image gallery!</h2>
    </div>
    <div class="container" id="container">
           <div> <img src="./images/img1.jpg" alt="img1" ></div>
            <div><img src="./images/img2.jpg" alt="img2"></div>
            <div><img src="./images/img3.jpg" alt="img3"></div>
            <div><img src="./images/img6.jpg" alt="img6"></div>
            <div><img src="./images/img7.jpg" alt="img7"></div>
            <div><img src="./images/img10.jpg" alt="img10"></div>
            <div><img src="./images/img11.jpg" alt="img11"></div>
            <div> <img src="./images/img4.jpg" alt="img4"></div>
            <div><img src="./images/img8.jpg" alt="img8"></div>
             <div><img src="./images/img5.jpg" alt="img5"></div>
            <div><img src="./images/img9.jpg" alt="img9"></div>
    </div> 
    <div id="model">
        <span id="close">x</span>
        <img id="img" alt="img">
    </div>

    <script src="./script.js"></script>
</body>
</html>
```

CSS

```
header {
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    background-color: hsla(0, 0%, 14%, 0.89);
    z-index: 1000;
    padding: 10px 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
body {
    margin-top: 80px;
} 
#info {
    padding-top: 3rem;
    text-align: center;
}
#info h1 {
    font-size: 5rem;
    color: white;
}
h2{
    padding-bottom: 3rem;
}
.container {
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
img{
    width: 100%;
    height: auto;
    border-radius: 10px;
}
img:hover{
    cursor:pointer;
    transform: scale(1.01);
    transition: transform 0.15s;
}
#model {
    position: fixed;
    justify-content: center;
    align-items: center;
    display: none;
    top: 0; 
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000;
}

#model img {
    max-width: 90%;
    max-height: 90%;
    align-items: center;
}

#close {
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 30px;
    color: white;
    cursor: pointer;
}

```

JS

```
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
```

## OUTPUT:

Name: Arunsamy D

Reg no: 212224240016 / 24900591


![alt text](<Screenshot (85).png>)


![alt text](<Screenshot (86).png>)


## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
