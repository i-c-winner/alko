export class FormValidaty {
  constructor(form) {
    this.form = form;
  }

  checkInputValidity() {
    let marker = null;
    const elements = Array.from(this.form);

    if (!elements[1].classList.contains('popup__input_type_link-url')) {
      if (!elements[0].validity.tooShort && !elements[0].validity.valueMissing && !elements[1].validity.tooShort && !elements[1].validity.valueMissing) {
        marker = true;
        return marker;
      } else {
        marker = false;
        return marker;
      }
    } else if (!elements[0].validity.tooShort && !elements[0].validity.valueMissing && !elements[1].validity.typeMismatch && !elements[1].validity.valueMissing) {
      marker = true;
      return marker;
    } else {
      marker = false;
      return marker;
    }
    return marker;
  }


  setSubmitButtonState(condition) {
    if (condition) {
      this.form.querySelector('.popup__button').classList.add('button_active');
    } else {
      this.form.querySelector('.popup__button').classList.remove('button_active');
    }


    //   document.querySelector('.popup__button_user').classList.add('button_active');
    //   document.querySelector('.popup__button').classList.add('button_active');
    // } else {
    //   document.querySelector('.popup__button_user').classList.remove('button_active');
    //   document.querySelector('.popup__button').classList.remove('button_active');
    // }
  }
  setEventListeners(ifFirst, ifSecond, name) {
    this.ifFirst = ifFirst;
    this.ifSecond = ifSecond;
    this.name = name;
    if (this.ifFirst || this.ifSecond) {
      this.name.classList.remove('error-text_enabled');
    } else {
      this.name.classList.add('error-text_enabled');
    }
  };

}