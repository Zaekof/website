const TIMER = 10000;

function ft_animate() {
  let element = document.getElementById('rog');

  element.classList.toggle('fade');
}

setInterval(() => {
  ft_animate();
}, TIMER);