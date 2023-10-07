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

