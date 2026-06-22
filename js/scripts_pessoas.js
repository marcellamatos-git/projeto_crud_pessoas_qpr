//pegando elementos do dom
const formpessoa = document.querySelector("#form-pessoa")
const divlista = document.querySelector("#div-lista-pessoas")

//criando array pessoas

const pessoas = []

//capturar o evento submit do formulario
formpessoa.addEventListener('submit', (evt) => {
    //interrompe o efeito de submeter dos dados do formulario
    evt.preventDefault()

    //criar um objeto formulario
    const dadosformpessoa = new FormData(formpessoa)

    //criar um objeto literal 
    const pessoa = {
        nome: dadosformpessoa.get('nome'),
        idade: dadosformpessoa.get('idade'),
        renda: dadosformpessoa.get("renda")
    }

    //chamando a funçao addpessoa e passando o objeto literal pessoa 
    addpessoa(pessoa)

    //limpar o fomulario
    formpessoa.reset()
})

//criando a funçao ADICIONAR pessoa

const addpessoa = (objpessoa) => {
    //adicioando objeto literal
    pessoas.push(objpessoa)

    //apos adicionar o objeto literal no array chama a função listpessoas
    listpessoas()
}

//função para listar pessoas do array
const listpessoas = () => {

    //limpando a div lista 
    divlista.innerHTML = ''

    //pecorrer o array pessoas com o foreach
    pessoas.forEach((elem , i) => {
        divlista.innerHTML += `${i} - ${elem.nome} - ${elem.idade}, ${elem.renda} <br>`

    })
}



