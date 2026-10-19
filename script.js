const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

const perguntas = [
    {
        enunciado: "Durante a viagem até Marte, uma tempestade solar inesperada atinge a nave. Os sistemas de navegação automática foram danificados. O que você faz?",
        alternativas: [
            {
                texto: "Ativar os escudos auxiliares manuais e redirecionar a energia dos sistemas secundários.",
                afirmacao: "Demonstrou raciocínio rápido ao priorizar a defesa e proteger a nave de danos severos."
            },
            {
                texto: "Confiar nos protocolos de emergência do computador de bordo e aguardar a reinicialização.",
                afirmacao: "Confia plenamente nos sistemas automatizados até mesmo durante crises extremas."
            }
        ]
    },
    {
        enunciado: "Ao pousar em Marte, a equipe descobre uma enorme caverna subterrânea com fontes de calor desconhecidas. Como proceder?",
        alternativas: [
            {
                texto: "Enviar drones automatizados para mapear o interior antes de qualquer exploração humana.",
                afirmacao: "Adotou uma postura cautelosa e segura priorizando a integridade física da tripulação."
            },
            {
                texto: "Liderar uma equipe de exploração imediata para investigar a origem do calor.",
                afirmacao: "Mostrou um espírito audaz e destemido diante de descobertas científicas únicas."
            }
        ]
    },
    {
        enunciado: "Os estoques de oxigênio estão em nível de alerta devido a um vazamento no módulo ecológico. Qual medida tomar?",
        alternativas: [
            {
                texto: "Racionar rigorosamente o consumo de oxigênio de toda a equipe enquanto repara o módulo.",
                afirmacao: "Impôs disciplina e cooperação coletiva para superar limitações de recursos."
            },
            {
                texto: "Utilizar a reserva emergencial de gelo marciano para tentar extrair oxigênio extra.",
                afirmacao: "Apostou na inovação técnica e no uso dos recursos locais para resolver problemas imediatos."
            }
        ]
    },
    {
        enunciado: "Um sinal de rádio codificado vindo de uma região remota de Marte é captado pelos receptores. O que você decide?",
        alternativas: [
            {
                texto: "Focar na construção da base e ignorar o sinal até que a sobrevivência esteja garantida.",
                afirmacao: "Manteve o foco absoluto nos objetivos primários da colônia."
            },
            {
                texto: "Investigar a transmissão para verificar se há outra expedição ou sinal alienígena.",
                afirmacao: "Apertou os laços com o desconhecido buscando respostas para grandes mistérios."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);

if (botaoJogarNovamente) {
    botaoJogarNovamente.addEventListener('click', () => {
        telaInicial.style.display = 'block';
        caixaResultado.classList.remove("mostrar");
        caixaPerguntas.classList.remove("mostrar");
        caixaAlternativas.classList.remove("mostrar");
    });
}

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaPerguntas.classList.add("mostrar");
    caixaAlternativas.textContent = "";
    caixaAlternativas.classList.add("mostrar");
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Relatório Final da Missão Marte:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar");
}
