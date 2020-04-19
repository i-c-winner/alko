

  export const userInfoName = document.querySelector('.user-info__name');
  export const userInfoJob = document.querySelector('.user-info__job');
  export const avatar=document.querySelector('.user-info__photo');

  export const name = document.forms.new.elements.name;
  export const link = document.forms.new.elements.link;
  export const username = document.forms.newuser.elements.user;
  export const userjob = document.forms.newuser.elements.aboutuser;
  console.log(34);
  
  import FormValidaty from './formValidator.js';
 console.log(FormValidaty);
 export  const newListener = new FormValidaty();
 console.log(36);
  export const initialCards = [];
 import Api from '../api.js';
 import Popup from './popup.js';
 import UserInfo from './UserInfo.js'
  export const api = new Api({
    baseUrl: 'https://praktikum.tk/cohort9',
    headers: {
      authorization: '174103b5-a3c6-4ad5-a7cf-a79f567a83c5',
      'Content-Type': 'application/json'
    }
  });
  
  export const isValidMarker = new FormValidaty(document.forms.newuser);
  export const isValidMarkerCard = new FormValidaty(document.forms.new);

  import CardList from './CardList.js';
  import Card from './Card.js';
  console.log(Card);
  const card= new Card();
  export const newCards = new CardList(document.querySelector('.places-list'), card.create, 'xrt');
  export const popupAddCard = new Popup(document.querySelector('#popup-content'), document.querySelector('.popup'), document.forms.new);
  export const userName = document.forms.newuser.elements.user;
  export const userJob = document.forms.newuser.elements.aboutuser;
  export const UpdateUser = new UserInfo(userInfoName, userInfoJob, userName, userJob, avatar);
 
  export const popupAddUser = new Popup(document.querySelector('#popup-user'),
    document.querySelector('.popup'), document.forms.newuser, username, userjob, avatar);

    

// загрузка карточек
api.getInitialCards()
.then((result) => {
  newCards.render(result);

  document.querySelector('.places-list')
    .addEventListener('click', card.like);
  document.querySelector('.places-list')
    .addEventListener('click', card.deleteCard);
})
.catch((err) => {
  console.log(err.message);
});
// первоначальная загрузки имени юзера
api.userInfo()
.then((result) => {
  UpdateUser.updateUserInfo(result)
})
.catch((err) => {
  console.log(err.message);
});

// отправка карточки пользователем
document.forms.new.addEventListener('submit',
function (event) {
  event.preventDefault();
  if (isValidMarkerCard.checkInputValidity()) {
    const data = {
      name: name.value,
      link: link.value,
    }
    newCards.addCard(data);
    popupAddCard.closed();
  }
});

// отправка формы юзера
document.forms.newuser.addEventListener('submit', (event) => {
event.preventDefault();
if (isValidMarker.checkInputValidity()) {
  api.userApdate(username, userjob)
    .then((result) => {

      UpdateUser.updateUserInfo(result)
      popupAddUser.closed();
    })
    .catch((err) => {
      console.log(err.message);
    });
} else {
  event.preventDefault()
}
});

// управление popup
document.querySelector('.user-info__button').addEventListener('click', () => {
popupAddCard.openContent()
});

document.querySelector('.popup__close').addEventListener('click', () => {
popupAddCard.closed()
});
document.querySelector('.popup__close_user').addEventListener('click', () => {
popupAddUser.closed()
});
document.querySelector('.user-add__button').addEventListener('click', () => {
popupAddUser.openContent(UpdateUser.setUserInfo().name,
  UpdateUser.setUserInfo().job)
});

// слушатели полей
document.querySelector('#linkinfo').addEventListener('input', function () {
isValidMarkerCard.setEventListeners(document.querySelector('#linkinfo').validity.typeMismatch,
  document.querySelector('#linkinfo').validity.valueMissing,
  document.querySelector('#error-text-link'));
});

document.querySelector('#textuser').addEventListener('input', function () {
isValidMarker.setEventListeners(document.querySelector('#textuser').validity.tooShort, document.querySelector('#textuser').validity.valueMissing,
  document.querySelector('#error-text-user'));
});

document.querySelector('#textinfo').addEventListener('input', function () {
isValidMarkerCard.setEventListeners(document.querySelector('#textinfo').validity.tooShort,
  document.querySelector('#textinfo').validity.valueMissing, document.querySelector('#error-text-info'));
});

document.querySelector('#textjob').addEventListener('input', function () {
isValidMarker.setEventListeners(document.querySelector('#textjob').validity.tooShort,
  document.querySelector('#textjob').validity.valueMissing, document.querySelector('#error-text-job'));
});

// актиация кнопки для формы Info
document.forms.new.addEventListener('input', function () {
if (isValidMarkerCard.checkInputValidity()) {
  isValidMarkerCard.setSubmitButtonState(true);
} else {
  isValidMarkerCard.setSubmitButtonState(false);
}
});

// активация кнопки для формы infoUser
document.forms.newuser.addEventListener('input', function () {
if (isValidMarker.checkInputValidity()) {
  isValidMarker.setSubmitButtonState(true);
} else {
  isValidMarker.setSubmitButtonState(false);
}
});

// галерея для изображения
document.querySelector('.places-list').addEventListener('click', function (event) {
let image = '';
if (event.target.classList.contains('place-card__image')) {
  const imgSize = document.querySelector('.img-size')
  const popupImage = document.querySelector('.popup-image')
  popupImage.classList.add('popup-image_open');
  // Такие длинные строки лучше переносить, это нечитаемо.
  image = `<div class="img-closed-wrapper"><img  class="img-size" alt="Изображение описывваемого места" src= ${event.target.style.backgroundImage.slice(4, -1)}><img src="./images/close.svg" alt="" class="image-close"></div>`
  popupImage.insertAdjacentHTML("beforeEnd", image);
  const imageClose = document.querySelector('.image-close');
  imageClose.addEventListener('click', function (event) {
    popupImage.querySelector('.img-closed-wrapper').remove();
    popupImage.classList.remove('popup-image_open');
  })
}
});

