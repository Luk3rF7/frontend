function carregar(){
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagen');
var data = new Date()
var hora = 22;
msg.innerHTML = `Agora são horas ${hora}horas.`

if(hora >= 8 && hora < 12 ){
    img.src = './pixel/amanhecer.jpg'
    document.body.style.background = '#537FE7';
    
}else if(hora >= 12 && hora <= 18){
    img.src = './pixel/atarde.jpg'
    document.body.style.background = '#e2cd9f'
}else{
 img.src = './pixel/anoite.jpg'
 document.body.style.background = '#1c2948'
}
}