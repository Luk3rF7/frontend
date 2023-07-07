function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[Erro]verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img =document.createElement('img')
        img.setAttribute('id', 'foto')
      //DINAMICO CRIANDO IAMGE = <div id=foto>
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0  && idade < 10){
                genero = 'criança'
                img.setAttribute('src', './image/menino.jpg')
            }else if( idade < 21){
                genero = 'jovem'
                img.setAttribute('src', './image/garoto.jpg')
            }else if( idade < 50){
                genero = 'homem'
                img.setAttribute('src', './image/homem.jpg')
            }else {
               genero = 'idoso'
               img.setAttribute('src', './image/idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0  && idade < 10){
                genero = 'criança'
                img.setAttribute('src', './image/menina.jpg')
            }else if(  idade <21){
                genero = 'jovem'
                img.setAttribute('src', './image/garota.jpg')
            }else if( idade < 50){
               genero =' mulher'
                img.setAttribute('src', './image/mulher.jpg')
            }else {
                genero = 'idoso'
                img.setAttribute('src', './image/idosa.jpg')
            }
        
        }
        res.innerHTML = `Detectamos ${genero} Idade ${idade} anos.`
        res.appendChild(img)
    }
}

