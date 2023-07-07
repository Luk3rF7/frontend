/* elements DOM */
const captchTxtBox = document.querySelector(".captch_box input");
const refreshBtn = document.querySelector(".refresh_button");
const captchInptBox = document.querySelector(".captch_input input");
const msg = document.querySelector(".msg");
const submitBtn = document.querySelector(".button");

// variavel genador:
let captchTxt = ''; 

 // gerador captcha funcão:

 const generateCaptch = () =>{
    const randomStrg = Math.random().toString(36).substring(2, 7);
    const randomStrgArray = randomStrg.split("");
    const changeStrg = randomStrgArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
    
        captchTxt = changeStrg.join(" ");
        captchTxtBox.value = captchTxt;
        console.log(captchTxt);
};
    //função refresh button
const refreshBtnClick = () => {
    generateCaptch();
    captchInptBox.value = "";
    captchaKeyUpValidate();
}

        //função de validação
    const captchaKeyUpValidate = () => {
        submitBtn.classList.toggle("disabled", !captchInptBox.value)
        if(!captchInptBox.value) msg.classList.remove("active");
    };

    const submitBtnClick = () => {
        captchTxt = captchTxt
        .split("")
        .filter((char) => char !== " ")
        .join(" ");
        msg.classList.add("active");
        //checando text correto ou não
        if(captchInptBox.value === captchTxt){
            msg.innerText = "Captcha está correto.";
            msg.style.color = "#f88102"
        }else{
            msg.innerText = "Captcha não esta certo!"
            msg.style.color = "#FF2525"; 
        }
    };
/* events list */
refreshBtn.addEventListener("click", refreshBtnClick);
captchInptBox.addEventListener("keyup", captchaKeyUpValidate);
submitBtn.addEventListener("click", submitBtnClick );


generateCaptch();
