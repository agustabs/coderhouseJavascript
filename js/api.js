const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
    "X-RapidAPI-Key": "21addd5c85mshca56da8dfb3c5b4p1b46bbjsn204af1b6efa1",
  },
};

function getUrl(trailer) {
  fetch(
    `https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${trailer}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response.items[0].url);
      window.open(response.items[1].url, "_blank");
    })
    .catch((err) => console.error(err));
}
