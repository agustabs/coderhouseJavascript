//card creator
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

    const linkTrailer = document.createElement("button");
    linkTrailer.textContent = "see the trailer";
    linkTrailer.classList.add("btn", "btn-warning");
    linkTrailer.addEventListener("click", () => {
      getUrl(movie.tittle + "trailer");
    });

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
