 export class Popup {
  constructor(typePopup, popup, forma, name, job) {
    this.typePopup = typePopup;
    this.popup = popup;
    this.forma = forma;
    // Эти переменные не используются, да и передавать имя и профессию в конструктор попапа нет смысла
    // Удалите
    // Надо исправить
    this._name = name;
    this._job = job;
  }


  openContent(name, job) {
    this.popup.classList.add('popup_is-opened');
    if (this.forma.className === "popup__form popup-user") {
      this.popup.classList.add('popup_is-opened');
      this.typePopup.classList.remove('popup__content_is-opened');
      this.forma.elements.user.value = name;
      this.forma.elements.aboutuser.value = job;
      (Array.from(this.typePopup.querySelectorAll('.error-text'))).forEach(function (item) {
        item.classList.add('error-text_enabled')
      });
      this.forma.querySelector('.popup__button_user').classList.add('button_active');
    } else {
      this.typePopup.classList.remove('popup__content_is-opened');
      this.forma.elements.name.value = '';
      this.forma.elements.link.value = '';
      (Array.from(this.typePopup.querySelectorAll('.error-text'))).forEach(function (item) {
        item.classList.remove('error-text_enabled')
      });
      this.forma.querySelector('.popup__button_content').classList.remove('button_active');
    }
  }

  closed() {
    this.popup.classList.remove('popup_is-opened');
    //this.typePopup.classList.add('popup__user_is-opened');
    this.typePopup.classList.add('popup__content_is-opened');
  }
  openUser() {
    this.popup.classList.add('popup_is-opened');
    this.typePopup.classList.remove('popup__user_is-opened');

  }
}