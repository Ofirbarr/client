export const getSuperMovies = async () => {
  const URL = `http://www.omdbapi.com/?s=super&type=movie&apikey=71ec1768`;

  await fetch(URL, {
    method: 'GET',
  })
    .then(response => response.json()) // get response, convert to json
    .then(json => {
      console.log(json.Search);
      return json.Search;
    })
    .catch(error => alert(error)); // display errors
};
