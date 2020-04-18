export class Card {
  
 
  create(cards) {
      const template = `<div class="place-card">
    <div class="place-card__image" style="background: url(${cards .link});background-size: cover;" >
      <button class="place-card__delete-icon"></button>
    </div>
    <div class="place-card__description">
      <h3 class="place-card__name">${cards.name}</h3>
      <button class="place-card__like-icon"></button>
    </div>
  </div>`;
  return template; 
  }

  like() {
    if (event.target.classList.contains('place-card__like-icon')) {
      event.target.classList.toggle('place-card__like-icon_liked')
    }
  }

  deleteCard(event) {
    if (event.target.classList.contains('place-card__delete-icon')) {
      const placeCardForDelete = event.target.closest('.place-card');
      event.currentTarget.removeChild(placeCardForDelete);
    }
  };
}