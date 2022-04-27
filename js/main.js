//constructor
class movies {
  constructor(name, rate, gender) {
    this.name = name.toLowerCase();
    this.rate = parseFloat(rate);
    this.gender = gender.toLowerCase();
  }
}
//database
const watchlist = [
  { name: "the godfather", rate: 8.5, gender: "drama" },
  { name: "titanic", rate: 8, gender: "drama", rate: 8 },
  { name: "interstellar", rate: 8, gender: "sci-fi", rate: 8 },
  { name: "the dark knight", rate: 9, gender: "action", rate: 9 },
  { name: "amelie", rate: 7.5, gender: "comedy", rate: 7.5 },
];

//cards creator
const movieCards = document.getElementById("movieCards");
document.addEventListener("DOMContentLoaded", () => {
  cardsCreator();
});

function cardsCreator() {
  cleanCards();
  watchlist.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("card", "movieCard", "m-3", "col-4");

    const movieName = document.createElement("div");
    movieName.textContent = movie.name;
    movieName.classList.add("card-header", "fw-bold");

    const movieUl = document.createElement("ul");
    movieUl.classList.add("list-group", "list-group-flush");

    const movieGender = document.createElement("li");
    movieGender.textContent = movie.gender;
    movieGender.classList.add("list-group-item");

    const movieRate = document.createElement("li");
    movieRate.textContent = movie.rate;
    movieRate.classList.add("list-group-item", "fw-bold");

    movieCard.appendChild(movieName);
    movieCard.appendChild(movieUl);
    movieUl.appendChild(movieGender);
    movieUl.appendChild(movieRate);
    movieCards.appendChild(movieCard);
  });
}

//add button event
const btnAdd = document.getElementById("btnAdd");
btnAdd.onclick = () => {
  let addMovie = prompt(
    "To enter a movie yo your watchlist type 'add': "
  ).toLowerCase();

  while (addMovie == "add") {
    watchlist.push(
      new movies(
        prompt("Enter film tittle").toLowerCase(),
        parseFloat(prompt("Type rate")),
        prompt("Gender: ").toLowerCase()
      )
    );
    addMovie = prompt("Want to add another movie? add/esc").toLowerCase();
  }
  cardsCreator();
};

//cardsCleaner
function cleanCards() {
  movieCards.innerHTML = "";
}
