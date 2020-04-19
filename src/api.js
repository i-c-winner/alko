export default class Api {
  constructor(options) {
    this.path = options.baseUrl;
    this.user = options.headers;

  }

  getInitialCards() {
    return fetch(this.path + '/cards', {
      headers: this.user
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .catch((err) => {
        return Promise.reject(err);
      })
  }

  userInfo() {
    return fetch(this.path + '/users/me', {
      headers: this.user
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .catch((err) => {
        return Promise.reject(err);
      })
  }

  // userUpdate
  userApdate(userName, userJob) {

    return fetch(this.path + '/users/me', {
      method: 'PATCH',
      headers: this.user,
      body: JSON.stringify({
        name: userName.value,
        about: userJob.value
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .catch((err) => {
        return Promise.reject(err);
      })
  }
}