//funciones
function cardsCreator(movies) {
  cleanCards();
  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("card", "movieCard", "m-3", "col-4");

    const movieName = document.createElement("div");
    movieName.textContent = movie.tittle;
    movieName.classList.add("card-header", "fw-bold");

    const movieUl = document.createElement("ul");
    movieUl.classList.add("list-group", "list-group-flush");

    const movieGender = document.createElement("li");
    movieGender.textContent = movie.gender;
    movieGender.classList.add("list-group-item");

    const movieRate = document.createElement("li");
    movieRate.textContent = movie.rate;
    movieRate.classList.add("list-group-item", "fw-bold");

    const linkTrailer = document.createElement("a");
    linkTrailer.textContent = "see the trailer";
    linkTrailer.setAttribute("href", movie.trailer);
    linkTrailer.setAttribute("target", "_blank");
    linkTrailer.classList.add("btn", "btn-warning");

    const deleteMovieBtn = document.createElement("a");
    deleteMovieBtn.textContent = "delete movie";
    deleteMovieBtn.classList.add("btn", "btn-danger", "m-2");
    deleteMovieBtn.addEventListener("click", () => {
      deleteMovie(movie);
    });

    movieCard.appendChild(movieName);
    movieCard.appendChild(movieUl);
    movieUl.appendChild(movieGender);
    movieUl.appendChild(movieRate);
    movieUl.appendChild(linkTrailer);
    movieUl.appendChild(deleteMovieBtn);
    movieCards.appendChild(movieCard);
    //scrollreveal library app
    ScrollReveal().reveal(".movieCard");
  });
}
//cardsCleaner
function cleanCards() {
  const movieCards = document.getElementById("movieCards");
  movieCards.innerHTML = "";
}
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
    <form id="movieForm" class="md-form mb-5">
      <input type="text" id="tittle" placeholder="tittle" class="form-control validate">
      <input type="number" id="rate" placeholder="rate" class="form-control validate">
      <input type="text" id="gender" placeholder="gender" class="form-control validate">
      <input type="text" id="trailer" placeholder="trailer's url" class="form-control validate">
      <button type="submit" class="btn btn-warning">add movie</button>
    </form>`;

  document.getElementById("movieForm").addEventListener("submit", addMovie);
}
//add & delete movie
function addMovie(e) {
  e.preventDefault();
  const tittle = document.getElementById("tittle").value;
  const rate = document.getElementById("rate").value;
  const gender = document.getElementById("gender").value;
  const trailer = document.getElementById("trailer").value;

  const movie = new movies(tittle, rate, gender, trailer);

  const moviesOnLocalStorage = JSON.parse(localStorage.getItem(userName));
  if (moviesOnLocalStorage == null) {
    localStorage.setItem(userName, JSON.stringify([movie]));
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
