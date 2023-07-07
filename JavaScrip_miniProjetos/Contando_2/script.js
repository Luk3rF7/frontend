function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar !'
        window.alert('[Erro]Falta dado!')

    } else {
        res.innerHTML = 'Contando...<br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if( p <= 0){
            window.alert('Passo inválido!Considerando PASSO!!')
            p = 1
        }

        if(i < f){
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c}, \u{1F695} `
            }   
        }else {
            //contagem regressiva
            for( let c = i; c >= f; c -= p){
                res.innerHTML += `${c}, \u{1F695}`
            }
            res.innerHTML += `\u{1f3c1}`
        }
       
    }
}