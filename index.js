document.addEventListener('DOMContentLoaded', function () {
    gsap.from('.animated-element', { opacity: 0, y: 50, duration: 1, stagger: 0.5 });
});

function enviarMensagem() {
    const mensagem = document.getElementById('mensagemContato').value;
    const link = `https://wa.me/5531986604077?text=${encodeURIComponent(mensagem)}`;
    window.location.href = link;
}
