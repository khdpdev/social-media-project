const appState = {
    darkMode: false,
    textTweet: []
};

const elementosDom = {}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Si está conectado');
    elementosDom.body = document.body;
    elementosDom.boton = document.querySelector('#dark-mode');

    console.log('Capturado y asignado las propiedades a la constante elementosDOM: ', elementosDom);

    elementosDom.boton.addEventListener('click', (e) => {
        e.preventDefault();

        elementosDom.body.classList.toggle('dark')
    });
});