function calcular() {
    return new  Promise((resolve,reject)=>{
        setTimeout(resolve,400,5);
    })
    
}

function segundoCalculo(numero){
    console.log(numero);
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,200,'segunda promesa');
    })
}

calcular().then(segundoCalculo()).then(tercerPromesa).then(console.log);