
const inputt = document.getElementById("mensagem")
const text1 = "/Navegador: OK, 1 minutinho, estou preparando a papelada para o back-end..."
const text2 = "/Navegador: Tudo certo, te vejo daqui a pouquinho!"
const text3 = "/back-end: Aoba...Vejamos uma requisição sobre o Sr. João"
const text4 = "/back-end: Certo, estarei te encaminhando para o Controller."
const text5 = "/Controller: Vejamos... um GET, show, já passei pro pessoal do Service."
const text6 = "/Service: Oi, Tudo bem? bom, vou ali buscar os arquivos, já volto."
const text7 = "/Service: Demorei né? ta uma bagunça por aqui, já pedi para mudarmos pra SQL."
const text8 = "/Service: Esse negócio de MongoDb, está me deixando louco..."
const text9 = "/Service: Enfim, Aqui estão os Arquivos, que pediu... Obg e volte Sempre."
const text10 = "/Navegador: Oi de novo, trouxe os arquivos do Sr. João ???"
const text11 = "/Navegador: Só um instante que estou renderizando na tela.."
const intervaloEntreLetras = 65;
const esperaPadrao = intervaloEntreLetras*1.4;

inputt.addEventListener('keydown', function (event) {
    console.log(event.target.value)

    if (KeyboardEvent.keyCode !== 13 && event.target.value == 's' || event.target.value == 'S') {
        enter();

    }
    else if (KeyboardEvent.keyCode !== 13 && event.target.value == 'n' || event.target.value == 'N') {
        chamaSeNao();
    }
}
)

function enter() {
    typeWritter (text1);
    setTimeout(() => pontos(), text1.length * esperaPadrao)
}

function pontos () {
    typeWritterLoading (1000)
    setTimeout(() =>{ 
        const divPre = getElement('.pontos');
        divPre.innerText = "";
        linhaDois()
    }, 3100)
}

function linhaDois () {
    typeWritter (text2);
    setTimeout(() => linhaTres(), text2.length * esperaPadrao)
}

function linhaTres () {
    typeWritter (text3);
    setTimeout(() => linhaQuatro(), text3.length * esperaPadrao)
}
function linhaQuatro () {
    typeWritter (text4);
    setTimeout(() => linhaCinco(), text4.length * esperaPadrao)
}
function linhaCinco () {
    typeWritter (text5);
    setTimeout(() => linhaSeis(), text5.length * esperaPadrao)
}
function linhaSeis () {
    typeWritter (text6);
    setTimeout(() => pontos2(), text6.length * esperaPadrao)
}

function pontos2 () {
    typeWritterLoading (3000)
    setTimeout(() =>{ 
        const divPre = getElement('.pontos');
        divPre.innerText = "";
        linhaSete()
    }, 9300)
}

function linhaSete () {
    typeWritter (text7);
    setTimeout(() => linhaOito(), text7.length * esperaPadrao)
}
function linhaOito () {
    typeWritter (text8);
    setTimeout(() => linhaNove(), text8.length * esperaPadrao)
}
function linhaNove () {
    typeWritter (text9);
    setTimeout(() => linhaDez(), text9.length * esperaPadrao)
}
function linhaDez () {
    typeWritter (text10);
    setTimeout(() => linhaOnze(), text10.length * esperaPadrao)
}
function linhaOnze () {
    typeWritter (text11);
    setTimeout(() => final(), text10.length * esperaPadrao)
}

function chamaSeNao() {
    let textoPos = document.getElementById('pos')
    let texto = document.getElementById('texto')
    textoPos.textContent = texto.innerText
    texto.classList.remove('invisivel')
    texto.classList.add('typingAni')
    texto.textContent = '/Navegador: poxa :/, que pena...'

}

function typeWritter (texto) {
    const divPos = getElement('.pos');
    const div = getElement('.texto-principal');
    divPos.textContent = div.innerText
    const textoArray = texto.split('');
    div.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => div.innerHTML += letra, intervaloEntreLetras * i)
    });
}
function typeWritterLoading (tempo, texto = '...') {
    const divPre = getElement('.pontos');
    const textoArray = texto.split('');
    divPre.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => divPre.innerHTML += letra, tempo * i)
    });
}
function getElement ( className ) {
    return document.querySelector(className)
}

function final() {
    document.body.innerHTML = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Document</title>
    </head>
    
    <body>
        <div class="container-cv">
            <div class="dados">
                <div class="infos">
                    <span class="nome">João Lucas Cruz</span> <br>
                    <div class="sub-titulo" > Desenvolvedor | Java | Angular | JavaScript | Spring Boot | Electrical Engineer</div>
                    <div class="descri">
                        Desde criança sempre fui movido a descobrir coisas novas, isso me impulsionou
                        a aprender muitas coisas durante toda minha caminhada, a maior delas a tecnologia. Esta que
                        venho aprendendo a mais de 10 anos, seja na área da Engenharia ou no campo
                        da Tecnologia da Informação.
                    </div>
                </div>
    
                <div class="foto">
                    <img src="https://raw.githubusercontent.com/jaotuta/portf-page/main/assets/safeimagekit-pixel-art.png"
                        alt="" class="foto">
                </div>
            </div>
            <div class="education">
                education
            </div>
            <div class="work-xp">
                works
            </div>
            <div class="social">
                social
            </div>
    
        </div>
    
    
    </body>
    
    </html>`
}