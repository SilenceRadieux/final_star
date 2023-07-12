let actualPage = document.URL;

let screenWidth = window.innerWidth;

if (actualPage === "https://quentin.cezdigit.com/") {
    document.body.style.backgroundImage = "url('../assets/pack_graphique/img-body-background.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
}
if (actualPage.includes("galerie.php")) {
  document.body.style.backgroundImage = "url('../assets/pack_graphique/img-body-background.png')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
}
if (actualPage.includes("vip.php")) {
    document.body.style.backgroundImage = "url('../assets/pack_graphique/img-vip-background.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    if (screenWidth < 800) {
       document.body.style.overflow="scroll";
    } 
}
if (actualPage.includes("serveur.php")) {
    document.body.style.backgroundImage = "url('../assets/pack_graphique/img-serveur-background.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    if (screenWidth < 800) {
      document.body.style.backgroundSize = "auto";
    }
}
if (actualPage.includes("avis.php")) {
    document.body.style.backgroundImage = "url('../assets/pack_graphique/img-avis-background.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center"
    document.body.style.backgroundRepeat = "no-repeat";
    if (screenWidth < 800) {
      document.body.style.backgroundSize = "310%";
    }
}
if (actualPage.includes("event.php")) {
    document.body.style.backgroundImage = "url('../assets/pack_graphique/img-event-background.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center"
    document.body.style.backgroundRepeat = "no-repeat";
    if (screenWidth < 800) {
      document.body.style.backgroundSize = "auto";
    }
}



const staff= document.querySelectorAll('.tous');
const options = document.querySelectorAll('input');
options.forEach(option => {  
  option.addEventListener('input', function() {
  staff.forEach(staff => {
    staff.style.display = 'block';
    if (!staff.classList.contains(this.value)) {
    staff.style.display = 'none';
    }
  });
  });

});




const imageContainers = document.querySelectorAll('.image-container');


document.addEventListener('DOMContentLoaded', function() {
  

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');


imageContainers.forEach(function(container) {
  container.addEventListener('click', function() {

    lightbox.style.display = 'block';
    lightboxImage.src = container.src;
  });
});

lightbox.addEventListener('click', function() {

  lightbox.style.display = 'none';
});

});




function padNumber(number) {
  return number.toString().padStart(2, "0");
}


const konamiCodeSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
  ];

let konamiCodeInput = [];

function checkKonamiCode(event) {
    konamiCodeInput.push(event.key);
    konamiCodeInput.splice(-konamiCodeSequence.length - 1, konamiCodeInput.length - konamiCodeSequence.length);

    if (konamiCodeInput.join("") === konamiCodeSequence.join("")) {
      // Redirect to the specified URL
      window.location.href = "https://www.quentin.cezdigit.com/back/";
    }
  }

document.addEventListener("keydown", checkKonamiCode);


