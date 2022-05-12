if (localStorage.getItem("test") === null) {
  localStorage.setItem(
    "test",
    JSON.stringify([
      {
        tittle: "the godfather",
        rate: 8,
        gender: "drama",
      },
      {
        tittle: "the godfather 2",
        rate: 9,
        gender: "drama",
      },
      {
        tittle: "the godfather 3",
        rate: 7,
        gender: "drama",
      },
      {
        tittle: "avatar the movie",
        rate: 8,
        gender: "fantasy",
      },
      {
        tittle: "the dark knight",
        rate: 9,
        gender: "action",
      },
      {
        tittle: "the dark knight rises",
        rate: 7,
        gender: "action",
      },
      {
        tittle: "avangers endgame",
        rate: 8,
        gender: "superheroes",
      },
      {
        tittle: "thor: ragnarok",
        rate: 7,
        gender: "superheroes",
      },
      {
        tittle: "matrix",
        rate: 9,
        gender: "sci-fi",
      },
      {
        tittle: "matrix reloaded",
        rate: 7,
        gender: "sci-fi",
      },
      {
        tittle: "the matrix resurrections",
        rate: 4,
        gender: "sci-fi",
      },
      {
        tittle: "harry potter and the sorcerer's stone",
        rate: 8,
        gender: "fantasy",
      },
      {
        tittle: "interstellar ",
        rate: 9,
        gender: "fantasy",
      },
    ])
  );
}
