let button = document.getElementById('send');

function sendForm(event) {
    event.preventDefault()
    console.log(button);
};

button.addEventListener('click', sendForm);