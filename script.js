const getPokemon = function () {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then((result) => {
      console.log(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

getPokemon();
