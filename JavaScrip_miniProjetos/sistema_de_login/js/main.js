const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitBtn = document.querySelector('#submit-btn')
const items = document.querySelectorAll('.items');
const bemVindo = document.getElementById('add-user')
//var que contera mensagem de erro
const errorMessage = document.querySelector('.msg'); 


submitBtn.addEventListener('click',(e) =>{
    e.preventDefault();

    const nameValue = nameInput.value
    const emailValue = emailInput.value
    const bemValue = bemVindo.value


    //vefiricando se forem preenchidos os campos !
    if(nameValue === "" || emailValue ===  ""){
    
        errorMessage.textContent = "Por favor,preencha os campos!"
        errorMessage.classList = 'error';


        setTimeout(()=>{
            errorMessage.textContent = "";
            errorMessage.classList = "";
        },3000)
        return;
    }

 // criando elemento na html
    const li = document.createElement("li");
   //
    li.classList = "item";
    li.innerHTML = `nome: ${nameValue} <br />${emailValue}`
    bemVindo.textContent = ` Bem-Vindo: ${nameValue}` ;

    items.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";
});



