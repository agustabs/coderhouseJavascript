//constructor
class movies {
  constructor(tittle, rate, gender) {
    this.tittle = tittle.toLowerCase();
    this.rate = parseFloat(rate);
    this.gender = gender.toLowerCase();
  }
}
let userName = document
  .getElementById("userForm")
  .addEventListener("submit", handlerUserForm);

//handler user form
function handlerUserForm(e) {
  e.preventDefault();
  userName = document.getElementById("user").value;

  let movieCards = document.getElementById("movieCards");
  const films = JSON.parse(localStorage.getItem(userName));

  films == null
    ? (movieCards.innerHTML =
        '<h1 class="text-light">it looks empty here, try adding a movie</h1>')
    : cardsCreator(films);

  welcomeUser();
  e.target.reset();
}
//welcome to the user
function welcomeUser() {
  const welcomeBanner = document.getElementById("welcomeBanner");

  welcomeBanner.innerHTML = `<h2 class="text-light">hello, ${userName}</h2>
    <form id="movieForm" class="md-form mb-5 p-2">
      <input type="text" id="tittle" placeholder="tittle" class="p-2 m-2 form-control validate" required>
      <input type="number" id="rate" placeholder="rate" class="p-2 m-2 form-control validate">
      <input type="text" id="gender" placeholder="gender" class="p-2 m-2 form-control validate">
      <button type="submit" class="p-2 m-2 btn btn-warning">add movie</button>
    </form>`;

  document.getElementById("movieForm").addEventListener("submit", addMovie);
}
//add & delete movie
function addMovie(e) {
  e.preventDefault();
  const tittle = document.getElementById("tittle").value;
  const rate = document.getElementById("rate").value;
  const gender = document.getElementById("gender").value;

  const movie = new movies(tittle, rate, gender);

  const moviesOnLocalStorage = JSON.parse(localStorage.getItem(userName));
  if (moviesOnLocalStorage == null) {
    localStorage.setItem(userName, JSON.stringify([movie]));
    cardsCreator([movie]);
  } else {
    moviesOnLocalStorage.push(movie);
    localStorage.setItem(userName, JSON.stringify(moviesOnLocalStorage));
    cardsCreator(moviesOnLocalStorage);
  }
  e.target.reset();
}
function deleteMovie(movie) {
  const moviesOnLocalStorage = JSON.parse(localStorage.getItem(userName));
  const newArray = moviesOnLocalStorage.filter(
    (item) => item.tittle != movie.tittle
  );
  localStorage.setItem(userName, JSON.stringify(newArray));
  cardsCreator(newArray);
}
