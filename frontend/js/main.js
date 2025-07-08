const tagline = "Helping you secure a better tomorrow...";
let index = 0;

function typeTagline() {
  const element = document.getElementById("animated-tagline");
  if (index < tagline.length) {
    element.innerHTML += tagline.charAt(index);
    index++;
    setTimeout(typeTagline, 60);
  }
}

window.onload = typeTagline;
