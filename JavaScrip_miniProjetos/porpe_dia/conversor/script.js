function PoupandoPorDia() {
    let real = document.getElementById("input-real").value; //variável guarda valor do real digitado
    let dias = document.getElementById("input-dias").value; // varialvel guarda valor do dias digitado

    let resultado = Math.floor(real * dias); // variavel guarda o valor do resultado

    poupar.innerHTML = "$ " + resultado; // insere o valor do resultado no nosso paragrafo

    alert(`Você juntou ${dias} essa valor poupado ${resultado}!!`); // mostra na tela o resultado
  }
