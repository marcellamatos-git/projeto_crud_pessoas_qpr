//criando a funçao para calcular os descontos
const calcdesconto = (objpessoa) => {
    let resultcalc = ''

    if((objpessoa.idade < 18) || (objpessoa.renda <=1700)){
        resultcalc = 'isento de desconto'
    }else if(objpessoa.renda <= 5000){
        resultcalc = ` R$ ${parseFloat(objpessoa.renda * 0.05).toFixed(2).replace('.',',')}`
    }else if(objpessoa.renda <= 8000){
        resultcalc = `R$ ${parseFloat(objpessoa.renda * 0.10).toFixed(2).replace('.',',')}`
    }else if(objpessoa.renda <= 12000){
        resultcalc = `R$ ${parseFloat(objpessoa.renda * 0.15).toFixed(2).replace('.',',')}`
    }else{
        resultcalc = `R$ ${parseFloat(objpessoa.renda * 0.20).toFixed(2).replace('.',',')}`

    }
    return resultcalc
     

}

export{calcdesconto}