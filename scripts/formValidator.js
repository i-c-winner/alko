class FormValidaty {
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


  /*REVIEW3. Надо исправить. Давайте сделаем логичнее и код этой функции сократится в 2 раза. Вы передаёте параметр form в класс
  FormValidaty, надо его использовать и в этой функции, а иенно вместо поиска с помощью querySelector в элементе document, нужно искать в
  элементе form и тогда 2 инструкции поиска в document, можно будет заменить одной инструкцией поиска в form, то есть Ваша функция setSubmitButtonState,
  может выглядеть так:
  setSubmitButtonState(condition) {
    if (condition) {
      form.querySelector('.popup__button').classList.add('button_active');
    } else {
      form.querySelector('.popup__button').classList.remove('button_active');
    }
  }
  Ведь кнопки сабмита на обеих формах имеют класс 'popup__button', а в 9-м спринте в проекте может появиться ещё одна форма - для смены аватара, и
  на ней также должна быть кнопка с классом 'popup__button', и, когда Вы преобразуете setSubmitButtonState как показано выше, третья форма также
  сможет валидироваться с помощью этого метода без изменения кода класса FormValidaty. После внесения изменений проверьте работу всех
  функций проекта.
    */
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