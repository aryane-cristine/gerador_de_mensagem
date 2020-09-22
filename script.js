let cores = ['#d54062', '#145374', '#CDB30C', '#62760c', '#ff5200']

let mensagens = [
    'A inovação distingue um líder de um seguidor.', 
    'A web não está concluída, é apenas a ponta do iceberg. As novas mudanças irão balançar o mundo ainda mais.', 
    'Para viajar basta existir.',
    'Tenho em mim todos os sonhos do mundo. ',
    'Tenho apenas duas mãos e o sentimento do mundo.' 
]

let autor = ['(Steve Jobs)', '(Tim Berners-Lee)','(Fernando Pessoa)','(Fernando Pessoa)','(Carlos Drummond de Andrade)']

let button = document.querySelector('button#btn') 

let paragrafo = document.querySelector('p#msg')

let opcao
let opcaoCor

// window.alert('script entrou')

function gerador() { //que vai ser chamada pelo evento onclick do button
    //window.alert('botão disparou')
    opcao = Math.floor(Math.random() * mensagens.length)
    opcaoCor = Math.floor(Math.random() * cores.length)

    paragrafo.innerText = "" 
    paragrafo.innerText += mensagens[opcao]
    paragrafo.innerHTML += '<br>'
    paragrafo.innerText += autor[opcao]
    paragrafo.style.color = cores[opcaoCor]
} 