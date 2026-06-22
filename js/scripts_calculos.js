//criando a funçao para calcular os descontos
const calcdesconto = (objpessoa) => {
    let resultcalc = ''

    if((objpessoa.idade < 18) || (objpessoa.renda <=1700)){
        resultcalc = 'isento de desconto'
    }else if(objpessoa.renda <= 5000){
        resultcalc = objpessoa.renda * 0.05
    }else if(objpessoa.renda <= 8000){
        resultcalc = objpessoa.renda * 0.10
    }else if(objpessoa.renda <= 12000){
        resultcalc = objpessoa.renda * 0.15
    }else{
        resultcalc = objpessoa.renda * 0.20

    }
    return resultcalc
     

}

export{calcdesconto}