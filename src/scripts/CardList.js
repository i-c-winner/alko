export default class CardList {
  constructor(container, card, ) {
    this.container = container;
    this.card = card;

  }

  addCard(initialCard) {
    this.container.insertAdjacentHTML("beforeEnd", this.card(initialCard));
  }

  render(initialCards) {
    initialCards.forEach((item) => {
      this.addCard(item);
    })
  }
}