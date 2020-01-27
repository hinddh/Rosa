// Select Element Function
const selectElement = function(element){
  return document.querySelector(element);
}

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
  body.classList.toggle('open');
})


// Scroll Animation
window.sr = ScrollReveal();
// Animate Right
sr.reveal('.animate-left' , {
  origin: 'left',
  duration: 1000,
  distance:'25rem',
  delay: 300
});

// Animate left
sr.reveal('.animate-right' , {
  origin: 'right',
  duration: 1000,
  distance:'25rem',
  delay: 600
});

// Animate Top
  sr.reveal('.animate-top' , {
    origin: 'top',
    duration: 1000,
    distance:'25rem',
    delay: 600
  });
// Animate Bottom
sr.reveal('.animate-bottom' , {
  origin: 'bottom',
  duration: 1000,
  distance:'25rem',
  delay: 600
});
