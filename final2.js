var img = new Image(window.innerWidth, window.innerHeight);
img.src = "Images/JardinPhoto.jpg";

const rect = document.getElementById('rect');
let w = window.innerWidth; 
let h = window.innerHeight; 

function mousePosition(event){
    let xPos = event.clientX; 
    let yPos = event.clientY; 

    updatePosition(xPos, yPos);
    Animatet(xPos, yPos);
}

function updatePosition(xPos, yPos){
    let xMove = (xPos - 5);  
    let yMove = (yPos - 5); 

    rect.style.left = xMove + 'px';
    rect.style.top = yMove + 'px';
    rect.style.backgroundPosition = "-" + xMove + "px -" + yMove + "px"; 
    rect.style.backgroundImage = "url('" + img.src + "')"; 
    rect.style.backgroundRepeat = "no-repeat"; 
    //rect.style.backgroundSize = "'" + window.outerWidth + "px " + window.outerHeight + "px'";
    rect.style.backgroundSize = "1450px 880px"; 
  }

function Animate(xPos, yPos){
  document.getElementById("container").appendChild(img);
  document.getElementById("container").style.animation = "animate 2s linear forwards";
  document.getElementById("container").style.animationDelay = "2s"
  
  let xMove = (xPos - 5);  
  let yMove = (yPos - 5); 

  rect.style.left = xMove + 'px';
  rect.style.top = yMove + 'px';
  rect.style.background = "#eb7992"; 
  rect.style.opacity = 0.6; 
  window.addEventListener("mousemove", Animate);
}

window.addEventListener("click", Animate); 

window.addEventListener('mousemove', mousePosition); 