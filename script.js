const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const tituloCor = document.getElementById("nome-cor-selecionada");
const miniaturaImagem0 = document.getElementById("0-imagem-miniatura")
const miniaturaImagem1 = document.getElementById("1-imagem-miniatura")
const miniaturaImagem2 = document.getElementById("2-imagem-miniatura")

const verdeCipreste = { //um objeto
    nome: "Verde-cipreste",
    pasta: "imagens-verde-cipreste" 
}

const azulInverno = { //um objeto
    nome: "Azul-inverno",
    pasta: "imagens-azul-inverno" 
}

const meiaNoite = {
    nome: "Meia-noite",
    pasta: "imagens-meia-noite"
}

const estelar = { 
    nome: "Estelar",
    pasta: "imagens-estelar"
}

const rosaClaro = { 
    nome: "Rosa-claro",
    pasta: "imagens-rosa-claro"
}

const opcoesCores = [verdeCipreste,azulInverno,meiaNoite,estelar,rosaClaro];
const opcoesTamanho = ["41mm", "45 mm"];

//const minhaLista = [6,7,4,8,10]
//minhaLista[4] // puxa o elemento 4
//meiaNoite.pasta //puxo o que está dentro de pasta

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem () {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id; //selecionando por um elemento específico e está "checked" --> pegando somente o id
    imagemSelecionada = idOpcaoSelecionada.charAt(0); //pega o char na posicao 0
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg"
}

function trocarTamanho () {
    //atualizar variavel de controle do tamanho
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    //mudar o titulo do produto
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome +  "para caixa de " + opcoesTamanho[tamanhoSelecionado];  
    //mudar tamanho da imagem de acordo com a opcao
    if (opcoesTamanho[tamanhoSelecionado] === "41mm") {
        imagemVisualizacao.classList.add("caixa-pequena");
    } else { 
        imagemVisualizacao.classList.remove("caixa-pequena");
    }           
}

function trocarCores() {
    //atualizar variaveL de controle cor
    const idOpcaoSelecionada = document.querySelector("[name= 'opcao-cor']:checked").id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    //trocar titulo da pagina
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome +  "para caixa de " + opcoesTamanho[tamanhoSelecionado]; 
    //trocar titulo da cor 
    tituloCor.innerText = "Cor - " + opcoesCores[corSelecionada].nome;
    //trocar imagens das miniaturas exibidas 
    miniaturaImagem0.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-0.jpeg"
    miniaturaImagem1.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-1.jpeg"
    miniaturaImagem2.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-2.jpeg"
    //trocar imagens exibidas 
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg"
}