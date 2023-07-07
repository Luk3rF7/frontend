let filaClient: Array<string> = [
    "Talita",
    "Gabriel",
    "Vanessa",
    "Felipe",
    "Samanta",
];

//tempo constrante
function  proximoAtendimento(fila: Array<string>) :String{
    return fila[0]
}

console.log(proximoAtendimento(filaClient))

//tempo linear

function filaCompleta(fila:Array<string>) :void{
    for(let i= 0; i< fila.length; i++){
        console.log(fila[i]);
    }
}

filaCompleta(filaClient);

//tempo logaritmo

const pontuacao: Array<number> = [10,20,22,50,70,100,102,444,567,789];

function buscaBinaria(numeros: number[], alvo:number): number{
    let esquerda: number = 0;
    let direita:number = numeros.length - 1;

    while(esquerda <= direita) {
        const mid:number =  Math.floor((esquerda + direita)/ 2);
        if(numeros[mid] === alvo) return mid;
        if(alvo < numeros[mid]) direita = mid - 1;
        else esquerda = mid + 1; 
    }
    return -1
}

//expotencial 
let pessoas: Array<string> =[
    "Gabriel",
    "Felipe",
    "Vanessa",
    "Talita",
    "Joana",
    "Gustavo",
    "Juliana",
    "Luiz",
    "Paola",
    "Cris"
];

function combinar(nomes: Array<string>){
    let combinacao = 0;
    for(let i = 0; i < nomes.length; i++){
        for(let j= 0; j < nomes.length; j++){
            if(i != j){
                combinacao++;
                console.log(`#${combinacao} : ${nomes[i]} & ${nomes[j]}`);
            }
        }
    }
}
combinar(pessoas);

//tempo expotencial fibonacci

function fibonacci(numero:number):number{
    if(numero <= 1) return numero;
    return fibonacci(numero - 2 ) + fibonacci(numero - 1);  
}

console.log(fibonacci(1));
console.log(fibonacci(10));
console.log(fibonacci(30));
console.log(fibonacci(40));
