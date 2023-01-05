let img = document.getElementsByClassName('portrait');
let para = document.getElementById('greet');

function greet(){
para.innerText = "WELCOME TO JITENDRA PORTFOLIO";
}
img.addEventListener('over',greet());