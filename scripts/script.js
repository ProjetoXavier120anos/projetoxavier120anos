let cards = [
      {
        titulo: `Tsoro Yematatu`,
        descricao: `O Tsoro Yematatu é um jogo tradicional do Zimbábue. O objetivo é alinhar três peças em uma linha reta para ganhar.`,
        imagem: `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6SAfrqqtkWyFQSNKovzbjlp8ZUfkk5BozVjeyVXyKY7eazMckrxWYGYA-qW9W_lmCmrokMhDqamvQF0WA1PgQfsdGOPFPsjPIKGVV5ndlP93LvlHIsf2UubZmtlK9a4MaLLw7PDuebTlPsAubBs2NWJOGUPDhHyypUMiWV_GgGadsu4boUqPi-Z6vqg/s778/Tsoro%20Yematatu%202.jpg`,
        link: `/jogo/tsoro-yematatu/`
    },
    
      {
        titulo: `MEHEN`,
        descricao: `Mehen é um dos jogos mais antigos do mundo, tendo sido encontrados vestígios de seu tabuleiro em escavações na pirâmide de Sacara, Egito, datados de 3000 a.C. O jogo possui aparência de uma cobra enrolada e seu nome é também o de uma divindade cobra da religião egípcia antiga.
Mehen é um elemento presente na cultura egípcia; refere-se a um deus cobra que protegia Rá durante a jornada em que o deus tinha que lutar ou escapar de Apep, a grande serpente do mundo inferior (em algumas variações da lenda, Seti era quem protegia Rá. Pode ser que a adoração de Mehem tenha fundido com a de Seti). Mehen também se referia a um jogo de tabuleiro jogado pelos egípcios, mas ninguém sabe quem veio primeiro, o deus ou o jogo.O jogo era popular entre 3000 AC até 2300 AC, então proibido sob causa desconhecida, e retornou em 700 AC.`,
        imagem: `https://drive.google.com/uc?export=download&id=1P-grzKNKUAbfwabUSHL6BZLkSstRwNPF`,
        link: `/jogo/mehen/`
      },
    
      {
        titulo: `Shisima`,
        descricao: `Shisima é um jogo de estratégia tradicional originário do Quênia. É um jogo de tabuleiro que tem sido apreciado e passado de geração em geração por comunidades quenianas. O jogo oferece desafios estratégicos emocionantes, que requerem pensamento tático e planejamento cuidadoso para vencer.`,
        imagem: `https://drive.google.com/uc?export=download&id=1b3au9dypXAy58qO20y7aaDi_WQfs3dy5`,
        link: `/jogo/shisima/`
      },
    
      {
        titulo: `Morabaraba`,
        descricao: `Morabaraba é um jogo de estratégia com tabuleiro. É uma variação
do jogo inglês “Morris”, introduzida na África pelos colonizadores britânicos,
tendo adquirido na variante africana as linhas diagonais e o aumento no
número de peças. `,
        imagem: `https://drive.google.com/uc?export=download&id=1Txyyn-bJFip9B5z_-U5G0F59tNZFctyo`,
        link: `/jogo/morabaraba/`
      },
    
      {
        titulo: `Borboleta`,
        descricao: `A Borboleta é um jogo de tabuleiro, da família dos jogos de tabuleiro Alquerque, também chamado Gulugufe (borboleta na língua tonga), na Índia e em Bangladesh é conhecido como Lau kati kata. O nome "Borboleta" se deve provavelmente ao desenho do tabuleiro, com o formato de uma borboleta.`,
        imagem: `https://img.elo7.com.br/product/zoom/2BC3831/borboleta-jogo-de-tabuleiro-africano-jogo-de-tabuleiro-em-madeira.jpg`,
        link: `/jogo/borboleta/`
      },
    
      {
        titulo: `Amarelinha Africana`,
        descricao: `A amarelinha africana é entendida como um jogo, ou uma brincadeira, com origens em Moçambique, um país do continente africano. Ela se caracteriza por ser uma brincadeira ritmada, ou seja, segue uma constância regular na realização dos movimentos. Desse modo, usa acompanhamentos musicais que demarcam seu ritmo.`,
        imagem: `https://drive.google.com/uc?export=download&id=11sD2K-iLDpLENhR67keA1NWNbyuY2w6L`,
        link: `/jogo/amarelinha-africana/`
      },
    
      {
        titulo: `dará`,
        descricao: ` é um jogo de estratégia para dois jogadores ou duas equipes e, alternadamente, cada jogador posiciona uma peça de cada vez no tabuleiro até completar o total das 24 peças`,
        imagem: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_K6bVHIRlG2vl5Ymt8xeDU_gapZ2KbHy6Q&usqp=CAU`,
        link: `/jogo/dará/`
      },
    //{...}
    ]

  // Função criarCard retorna o HTML de um card
  function criarCard(titulo, descricao, imagem, link) {
    let cardInnerHTML = `
    <div class="card col">
      <img src="${imagem}" class="card-img-top" alt="${titulo}">
      <div class="card-body">
        <h5 class="card-title">
          ${titulo}
        </h5>
        <p class="card-text">${descricao}</p>
        <a href="${link}" class="btn btn-primary">Como jogar?</a>
        <a href="#" onclick="desenharQrCode('${link}', '${titulo}')" class="float-end"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-520v-320h320v320H120Zm80-80h160v-160H200v160Zm-80 480v-320h320v320H120Zm80-80h160v-160H200v160Zm320-320v-320h320v320H520Zm80-80h160v-160H600v160Zm160 480v-80h80v80h-80ZM520-360v-80h80v80h-80Zm80 80v-80h80v80h-80Zm-80 80v-80h80v80h-80Zm80 80v-80h80v80h-80Zm80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80 80v-80h80v80h-80Z"/></svg></a>
      </div>
    </div>
    `;

    return cardInnerHTML;
}

// Declaração de variáveis globais
let tituloDoJogo, linkCompletoDoJogo;

// Função para fazer o download da imagem da canvas como PNG
function downloadCanvas() {
  // Obtém o elemento da canvas
  const canvas = document.getElementById('qrcanvas');
  const link = document.createElement('a');

  // Converte o conteúdo da canvas para uma URL de dados (PNG)
  const image = canvas.toDataURL('image/png');

  // Define a URL de dados como o link de download
  link.href = image;

  // Define o nome do arquivo para o download
  link.download = `qrcode_${tituloDoJogo}.png`;

  // Clica no link para iniciar o download
  link.click();
}

// Função para desenhar o código QR
function desenharQrCode(link, titulo) {
  // Constrói o link completo do jogo
  linkCompletoDoJogo = `https://projetoxavier120anos.github.io${link}`;
  tituloDoJogo = titulo;

  // Função doqr desenha o código QR
  doqr(linkCompletoDoJogo);
  // Chama a função para mostrar o modal com o QR Code
  QrModal();
}

// Variável para controlar se o modal está aberto ou fechado
let open = false;

// Função para controlar a exibição do modal com o QR Code
function QrModal() {
  const dialogQrCode = document.querySelector('.dialog-qrcode');

  // Alterna o estado do modal (aberto/fechado)
  open = !open;

  if (open)
    dialogQrCode.showModal(); // Mostra o modal
  else
    dialogQrCode.close(); // Fecha o modal
}

// Evento de carregamento da página
window.addEventListener(`load`, () => {
    // Função setupqr inicia a o QrCode
    setupqr();

    const cardContainer = document.querySelector(`.card-container > div`);

    // Itera sobre as cartas e cria os cards na interface
    cards.forEach(card => {
        cardContainer.innerHTML += criarCard(card.titulo, card.descricao, card.imagem, card.link);
    });
});

