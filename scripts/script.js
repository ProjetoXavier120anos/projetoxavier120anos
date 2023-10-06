let cards = [
      {
        titulo: `Tsoro Yematatu`,
        descricao: `O Tsoro Yematatu é um jogo tradicional do Zimbábue. O objetivo é alinhar três peças em uma linha reta para ganhar.`,
        imagem: `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6SAfrqqtkWyFQSNKovzbjlp8ZUfkk5BozVjeyVXyKY7eazMckrxWYGYA-qW9W_lmCmrokMhDqamvQF0WA1PgQfsdGOPFPsjPIKGVV5ndlP93LvlHIsf2UubZmtlK9a4MaLLw7PDuebTlPsAubBs2NWJOGUPDhHyypUMiWV_GgGadsu4boUqPi-Z6vqg/s778/Tsoro%20Yematatu%202.jpg`,
        link: `/jogo/tsoro-yematatu/`
    },
    
      {
        titulo: `Morabaraba`,
        descricao: `Morabaraba é um jogo de estratégia com tabuleiro. É uma variação
do jogo inglês “Morris”, introduzida na África pelos colonizadores britânicos,
tendo adquirido na variante africana as linhas diagonais e o aumento no
número de peças.`,
        imagem: `https://image.winudf.com/v2/image1/Y29tLm1pbGxnYW1lLmFsaWduaXRfaWNvbl8xNTc3OTgyNDc4XzAxMw/icon.png?w=&fakeurl=1`,
        link: `/jogo/morabaraba/`
      },
    
      {
        titulo: `MEHEN `,
        descricao: `Mehen é um dos jogos mais antigos do mundo, tendo sido encontrados vestígios de seu tabuleiro em escavações na pirâmide de Sacara, Egito, datados de 3000 a.C. O jogo possui aparência de uma cobra enrolada e seu nome é também o de uma divindade cobra da religião egípcia antiga.
Mehen é um elemento presente na cultura egípcia; refere-se a um deus cobra que protegia Rá durante a jornada em que o deus tinha que lutar ou escapar de Apep, a grande serpente do mundo inferior (em algumas variações da lenda, Seti era quem protegia Rá. Pode ser que a adoração de Mehem tenha fundido com a de Seti). Mehen também se referia a um jogo de tabuleiro jogado pelos egípcios, mas ninguém sabe quem veio primeiro, o deus ou o jogo.O jogo era popular entre 3000 AC até 2300 AC, então proibido sob causa desconhecida, e retornou em 700 AC.`,
        imagem: `https://drive.google.com/uc?export=download&id=1P-grzKNKUAbfwabUSHL6BZLkSstRwNPF`,
        link: `/jogo/mehen-/`
      },
    //{...}
    ]
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
      </div>
    </div>
    `;

    return cardInnerHTML;
}

window.addEventListener(`load`, () => {
    const cardContainer = document.querySelector(`.card-container > div`);

    cards.forEach(card => {
        cardContainer.innerHTML += criarCard(card.titulo, card.descricao, card.imagem, card.link);
    });

});
