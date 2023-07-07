class ValidarLogin{
    constructor(){
        this.validations = [ 
            'data-min-length',
        ]
    }
    validate(formLogin){
        let inputs = formLogin.getElementsByTagName("input");
        let inputsArrays = [...inputs];

        inputsArrays.forEach(function(input){
          for(let i = 0; this.validations.length > i ; i++){
            if(input.getAttribute(this.validations[i]) != null){
                console.log('success ?')
            }
            let method = this.validations[i]
            .replace('data-','')
            .replace('-','');
            let value = input.getAttribute(this.validations[i])
            this[method](input,value);
          }
        },this);
    }
    minlength(input,minValue){
        let inputLength = input.value.length;
        let errorMsg = `O campo precisa ter pelo menos ${minValue} numeros e letras.`;
        if(inputLength < minValue){
            console.log(errorMsg);
        }
    }

}
let validLogin = new ValidarLogin();

// id / tag 
let formLogin = document.getElementById('form_login');
let  submit = document.getElementById('btn_login');

//eventos de disparo

submit.addEventListener('click', (e) => {
    e.preventDefault();
    validLogin.validate(formLogin)
})
