const init = () => {

    const validadeEmail = (event) => {
        const input = event.currentTarget;
        const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
        const emailTest = regex.test(input.value);

        if (!emailTest) {
            submitButton.setAttribute('Desibled', 'disabled');
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.setAttribute('Desibled');
            input.nextElementSibling.classList.remove('error');
        }
    }

    const validadePassword = (event) => {
        const input = event.currentTarget;

        if (input.value.length < 8) {
            submitButton.setAttribute("disabled", disabled);
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.removeAttribute("disabled");
            input.nextElementSibling.classList.remove('error');
        }
    }

    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login__submit');

    inputEmail.addEventListener('input', validadeEmail);
    inputPassword.addEventListener('input', validadePassword);

    const erroHandler = () => {
        submitButton.classList.remove('sucesso');
    submitButton.classList.add('error');
    submitButton.textContent = "Error :("
}

const sucessHandler = () => {
    submitButton.classList.remove('error');
    submitButton.classList.add('sucesso');
    submitButton.textContent ="send Sucess!!";
}

if (submitButton) {
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        submitButton.textContent = "...Loading";

        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: inputEmail.value,
                password: inputPassword.value,
            })
        }).then((response) => {
            if (response.status !== 200) {
               return erroHandler();
            }
            sucessHandler();
        }).catch(() => {
            erroHandler();
        })
    })
}
}

window.onload = init;