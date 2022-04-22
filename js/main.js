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
    movieCard.classList.add("card");

    const movieName = document.createElement("h3");
    movieName.textContent = movie.name;

    const movieGender = document.createElement("p");
    movieGender.textContent = movie.gender;

    const movieRate = document.createElement("b");
    movieRate.textContent = movie.rate;

    movieCard.appendChild(movieName);
    movieCard.appendChild(movieGender);
    movieCard.appendChild(movieRate);
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
