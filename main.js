//constructor
class movies {
  constructor(name, rate, gender) {
    this.name = name.toLowerCase();
    this.rate = parseFloat(rate); //parseFloat convierte el numero de entero a decimal
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

watchlist.push(new movies("LION KING", 10, "Animated"));
watchlist.push(new movies("matrix", 7, "sci-fi"));
console.log(watchlist);

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

alert("Now you can see you're entire watchlist at console log.");

watchlist.forEach((watch) => {
  console.log(watch);
});

//DOM

const movieCards = document.getElementById("movieCards");

for (const movie of watchlist) {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>Name: ${movie.name}</h3>
    <p>Rate: ${movie.rate}</p>
    <b>Gender: ${movie.gender}</b>
    <hr>
  `;
  movieCards.appendChild(div);
}
