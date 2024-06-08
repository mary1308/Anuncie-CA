function registerParticular() {
  window.location.href = "cadastroParticular.html";
}

const myCarouselElement = document.querySelector('#carouselExampleIndicators1')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
})

function checkWidth() {
  if (window.outerWidth <= 576) {
      carousel.cycle()
    } else {
      carousel.pause()
  }
}

// Verifica o tamanho da tela quando a página é carregada
window.addEventListener('load', checkWidth);

// Verifica o tamanho da tela quando a janela é redimensionada
window.addEventListener('resize', checkWidth);
