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
        titulo: `Moraboraba`,
        descricao: `Morabaraba é um jogo de estratégia com tabuleiro. É uma variação
do jogo inglês “Morris”, introduzida na África pelos colonizadores britânicos,
tendo adquirido na variante africana as linhas diagonais e o aumento no
número de peças`,
        imagem: `https://drive.google.com/uc?export=download&id=1_Pe7-eZBFoLkg1QgVRCT7FTHMNmhFwm0`,
        link: `/jogo/moraboraba/`
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