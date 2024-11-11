//Animação Carrossel

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function moveCarousel(direction) {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + items.length) % items.length;
    items[currentIndex].classList.add('active');
    
    // Mover o carrossel horizontalmente
    document.querySelector('.carousel').style.transform = `translateX(0%)`;
}

// Exibir o primeiro slide ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    updateSlide();
});

window.onscroll = function() {
    var whatsappButton = document.querySelector('.whatsapp-float');
}

// Exibe o pop-up quando a página carrega
window.onload = function() {
    document.getElementById('popup-background').style.display = 'block';
}

// Fecha o pop-up ao clicar no "X"
document.getElementById('popup-close').onclick = function() {
    document.getElementById('popup-background').style.display = 'none';
}

// Fecha o pop-up ao clicar fora da caixa
window.onclick = function(event) {
    var popupBackground = document.getElementById('popup-background');
    if (event.target == popupBackground) {
        popupBackground.style.display = 'none';
    }
}