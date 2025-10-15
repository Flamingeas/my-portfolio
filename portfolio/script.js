/* writting effect */
window.addEventListener("DOMContentLoaded", (event) => {
  typeWriter();
});

let i = 0;
let txt = document.getElementById("typewriter").innerHTML;
document.getElementById("typewriter").innerHTML = "";
 
const speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
