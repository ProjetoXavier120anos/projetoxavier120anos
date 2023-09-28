let cards = [
      {
        titulo: 'Tsoro Yematatu',
        descricao: 'O Tsoro Yematatu é um jogo tradicional do Zimbábue. O objetivo é alinhar três peças em uma linha reta para ganhar.',
        imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6SAfrqqtkWyFQSNKovzbjlp8ZUfkk5BozVjeyVXyKY7eazMckrxWYGYA-qW9W_lmCmrokMhDqamvQF0WA1PgQfsdGOPFPsjPIKGVV5ndlP93LvlHIsf2UubZmtlK9a4MaLLw7PDuebTlPsAubBs2NWJOGUPDhHyypUMiWV_GgGadsu4boUqPi-Z6vqg/s778/Tsoro%20Yematatu%202.jpg',
        link: '/jogo/tsoro-yematatu/'
    },

    
      {
        titulo: 'TEste',
        descricao: 'essa bricadeira é de teste',
        imagem: 'https://i.pinimg.com/736x/17/0a/81/170a815040a32fcc2f596c59c9284c15.jpg',
        link: '/jogo/teste/'
      },
    //{...}
    ]
  function criarCard(titulo, descricao, imagem, link) {
    let cardInnerHTML = `
    <div class="row row-cols-3">
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
  </div>
    `;

    return cardInnerHTML;
}

window.addEventListener('load', () => {
    const cardContainer = document.querySelector('.card-container');

    cards.forEach(card => {
        cardContainer.innerHTML += criarCard(card.titulo, card.descricao, card.imagem, card.link);
    });

});