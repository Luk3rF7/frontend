/*  pegando os ID */
const form = document.getElementById('form');
const username = document.getElementById("username");
const email  = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");


//adicionando submit 

form.addEventListener('submit',(e) =>{
        e.preventDefault();

        //adicionando checkinput 
        checkInputs();
});

//criando funcao de check error & sucess

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    //validação basic
    if(usernameValue === ""){
        setErrorFor(username,"O nome de Usário é Obrigatorio.")
    }else {
        setSuccessFor(username)
    }

    //verificando e-mail
    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatório.");
      } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido.");
      } else {
        setSuccessFor(email);
      }

      //verificando senha:
      if( passwordValue === ""){
        setErrorFor(password,"A senha é obrigatório.");
      }else if(passwordValue.length < 8){
        setErrorFor(password, "A senha precisa ter no mínimo 8 caracteres.")
      }else {
        setSuccessFor(password);
      }

      //verificar senha:

      if(passwordConfirmationValue === ""){

        setErrorFor(passwordConfirmation,"A confirmação de senha é obrigatorio")

      }else if(passwordConfirmationValue !== passwordValue){

        setErrorFor(passwordConfirmation,"As senhas não conferem.") 

      }else {
        setSuccessFor(passwordConfirmation)
      }
      //verficando toda validação dos campos

const  formControls = form.querySelectorAll('.form-control')
//tranformo numa arrays
const formIsValid = [...formControls].every(formControl =>{
    return formControl.className === 'form-control success'
})
//retorno caso formulario esteja completo.
if(formIsValid){
    console.log("O formulário está 100% válido")
}

    }
//function de error / success
function setErrorFor(input,message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  //adc msg de error e a class de erro
  small.innerText = message;
  formControl.className = "form-control error";
}
function setSuccessFor(input,message){
    const formControl = input.parentElement;

    //adc class sucess
    formControl.className = "form-control success"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
