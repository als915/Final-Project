const venice = document.getElementById("venice");
const motel = document.getElementById("motel");
const paris = document.getElementById("paris");
let xBrowserRatio; 
let yBrowserRatio; 

function scaleRatio(){
	let browserWidth = window.innerWidth; 
	let browserHeight = window.innerHeight; 

	xBrowserRatio = browserWidth / 120; 
	yBrowserRatio = browserHeight / 120; 
}

function mousePos(event){
	let xPos = event.clientX; 
	let yPos = event.clientY; 

	updateRotation(xPos, yPos);
}

function updateRotation(xPos, yPos){
	let xRot = 60 - Math.ceil(yPos / yBrowserRatio);
	let yRot = -60 + Math.ceil(xPos / xBrowserRatio);
	venice.style.transform = 'rotateX(' + xRot + 'deg' + ' ' + 'rotateY(' + yRot + 'deg)';
	motel.style.transform = 'rotateX(' + xRot + 'deg' + ' ' + 'rotateY(' + yRot + 'deg)';
	paris.style.transform = 'rotateX(' + xRot + 'deg' + ' ' + 'rotateY(' + yRot + 'deg)';
}
window.addEventListener('load', scaleRatio);
window.addEventListener('resize', scaleRatio);
window.addEventListener('mousemove', mousePos);
