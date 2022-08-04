
let inputt = document.getElementById("mensagem")

inputt.addEventListener('keydown', function (event) {
    console.log(event.target.value)

    if (KeyboardEvent.keyCode !== 13 && event.target.value == 's' || event.target.value == 'S') {
        let texto = document.getElementById('texto')
        console.log(inputt)
        texto.classList.add("invisivel")
        texto.classList.remove('typingAni')
        enter();

    }
    else if (KeyboardEvent.keyCode !== 13 && event.target.value == 'n' || event.target.value == 'N') {
        let texto = document.getElementById('texto')
        texto.classList.add("invisivel")
        texto.classList.remove('typingAni')
        chamaSeNao();

    }
}
)


function addPonto(conteudo) {
    return conteudo + '.';
}

function setaEspera1(tempoIntervalo) {
    let intervalo = setInterval(() => {
        clearInterval(intervalo)
        chama()
    }, tempoIntervalo)

}


function enter() {
    setaEspera1(500)
}

function chama() {
    let textoPos = document.getElementById('pos')
    let texto = document.getElementById('texto')
    textoPos.textContent = texto.innerText
    texto.classList.remove('invisivel')
    texto.classList.add('typingAni')
    texto.textContent = '/Navegador: OK, 1 minutinho, estou preparando a papelada para o back-end...'
    let intervaloTres = setInterval(() => {
        clearInterval(intervaloTres)
        setaEspera2(600)
    }, 4500)


}
function chamaSeNao() {
    let textoPos = document.getElementById('pos')
    let texto = document.getElementById('texto')
    textoPos.textContent = texto.innerText
    texto.classList.remove('invisivel')
    texto.classList.add('typingAni')
    texto.textContent = '/Navegador: poxa :/, que pena...'

}

function setaEspera2(tempoIntervalo) {
    let texto = document.getElementById('texto')
    let contentOne = document.getElementById('pontos')
    let intervalo = setInterval(() => {
        console.log(contentOne.innerText);
        let textoPonto = contentOne.innerText;
        textoPonto = addPonto(textoPonto)
        contentOne.textContent = textoPonto
        texto.classList.add('invisivel')
        texto.classList.remove('typingAni')

        if (contentOne.innerText != '...') {
            setaEspera2(tempoIntervalo);
            clearInterval(intervalo)
        } else {
            console.log('Saiu2')
            clearInterval(intervalo)
            let intervaloDois = setInterval(() => {
                contentOne.textContent = ''
                clearInterval(intervaloDois)
                chama2()
            }, 750)

        }
    }, tempoIntervalo)

}

function chama2() {
    let textoPos = document.getElementById('pos')
    let texto = document.getElementById('texto')
    textoPos.textContent = texto.innerText
    texto.classList.remove('invisivel')
    texto.classList.add('typingAni')
    texto.textContent = '/back-end: Aoba...Vejamos uma requisição sobre o Sr. João'
    let intervaloTres = setInterval(() => {
        clearInterval(intervaloTres)
        texto.classList.remove('typingAni')
    }, 4500)
    let intervaloTres1 = setInterval(() => {
        let textoPos = document.getElementById('pos')
        let texto = document.getElementById('texto')
        textoPos.textContent = texto.innerText
        texto.classList.add('typingAni')
        texto.textContent = '/back-end: Certo, estarei te encaminhando para o Controller.'
        clearInterval(intervaloTres1)
    }, 5000)
    let intervaloTres2 = setInterval(() => {
        clearInterval(intervaloTres2)
        texto.classList.remove('typingAni')
        console.log('Fim')
    }, 8700)
    let intervaloTres3 = setInterval(() => {
        let textoPos = document.getElementById('pos')
        let texto = document.getElementById('texto')
        textoPos.textContent = texto.innerText
        texto.classList.add('typingAni')
        texto.textContent = '/Controller: Vejamos... um GET, show, já passei pro pessoal do Service.'
        clearInterval(intervaloTres3)
    }, 10000)
    let intervaloTres3emeio = setInterval(() => {
        clearInterval(intervaloTres3emeio)
        texto.classList.remove('typingAni')
        console.log('Fim')
    }, 15200)
    let intervaloTres4 = setInterval(() => {
        let textoPos = document.getElementById('pos')
        let texto = document.getElementById('texto')
        textoPos.textContent = texto.innerText
        texto.classList.add('typingAni')
        texto.textContent = '/Service: Oi, Tudo bem? bom, vou ali buscar os arquivos, já volto.'
        clearInterval(intervaloTres4)
    }, 15800)
    let intervaloTres5 = setInterval(() => {
        let pontos = document.getElementById('pontos')
        pontos.textContent = '...'
        pontos.classList.add('typingAni2')
        clearInterval(intervaloTres5)
        texto.classList.remove('typingAni')
        console.log('Fim')

    }, 21000)
    let intervaloTres6 = setInterval(() => {
        let pontos = document.getElementById('pontos')
        let textoPos = document.getElementById('pos')
        let texto = document.getElementById('texto')
        pontos.textContent = ''
        pontos.classList.remove('typingAni2')
        textoPos.textContent = texto.innerText
        texto.classList.add('typingAni')
        texto.textContent = '/Service: Demorei né? ta uma bagunça por aqui, já pedi para mudarmos pra SQL.'
        clearInterval(intervaloTres6)
    }, 31000)
    let intervaloTres7 = setInterval(() => {
        clearInterval(intervaloTres7)
        texto.classList.remove('typingAni')
        console.log('Fim')
    }, 36000)
    let intervaloTres8 = setInterval(() => {
        let textoPos = document.getElementById('pos')
        let texto = document.getElementById('texto')
        textoPos.textContent = texto.innerText
        texto.classList.add('typingAni')
        texto.textContent = '/Service: Esse negócio de MongoDb, está me deixando louco...'
        clearInterval(intervaloTres8)
    }, 37000)
    let intervaloTres9 = setInterval(() => {
        clearInterval(intervaloTres9)
        texto.classList.remove('typingAni')
        console.log('Fim')
    }, 40500)
    let intervaloTres10 = setInterval(() => {
        let textoPos = document.getElementById('pos')
        let texto = document.getElementById('texto')
        textoPos.textContent = texto.innerText
        texto.classList.add('typingAni')
        texto.textContent = '/Service: Enfim, Aqui estão os Arquivos, que pediu... Obg e volte Sempre.'
        clearInterval(intervaloTres10)
    }, 41800)
    let intervaloTres11 = setInterval(() => {
        clearInterval(intervaloTres11)
        texto.classList.remove('typingAni')
        console.log('Fim')
    }, 47000)
    let intervaloTres12 = setInterval(() => {
        let textoPos = document.getElementById('pos')
        let texto = document.getElementById('texto')
        textoPos.textContent = texto.innerText
        texto.classList.add('typingAni')
        texto.textContent = '/Navegador: Oi de novo, trouxe os arquivos do Sr. João ???'
        clearInterval(intervaloTres12)
    }, 47300)
    let intervaloTres13 = setInterval(() => {
        clearInterval(intervaloTres13)
        texto.classList.remove('typingAni')
        console.log('Fim')
    }, 52200)
    let intervaloTres14 = setInterval(() => {
        let textoPos = document.getElementById('pos')
        let texto = document.getElementById('texto')
        textoPos.textContent = texto.innerText
        texto.classList.add('typingAni')
        texto.textContent = '/Navegador: Só um instante que estou renderizando na tela..'
        clearInterval(intervaloTres14)
    }, 52400)
    let intervaloTres15 = setInterval(() => {
        let pontos = document.getElementById('pontos')
        pontos.textContent = '...'
        pontos.classList.add('typingAni2')
        clearInterval(intervaloTres15)
        texto.classList.remove('typingAni')
        console.log('Fim')

    }, 58000)
    let intervaloTres16 = setInterval(() => {
        clearInterval(intervaloTres16)
        final();
    }, 61500)
}

function final() {
    document.body.innerHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        Hello, World!
    </body>
    </html>`
}