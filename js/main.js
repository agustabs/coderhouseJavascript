//constructor
class movies {
  constructor(tittle, rate, gender, trailer) {
    this.tittle = tittle.toLowerCase();
    this.rate = parseFloat(rate);
    this.gender = gender.toLowerCase();
    this.trailer = trailer;
  }
}
let userName = document
  .getElementById("userForm")
  .addEventListener("submit", handlerUserForm);
