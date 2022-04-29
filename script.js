/* 
    click button
    grab pokemon name
    print pokemon name (maybe in like a sentence) on the page
    (probably need a clear function somewhere)
    everytime u refresh / press the button again, a new pokemon will replace it
*/

function getPokemon() {
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  const number = getRandomNumber(500);

  {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then((result) => {
        console.log(result.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

getPokemon();

function displayPokemon(pokemonName) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon-wrapper");

  const pokemonNew = document.createElement("h2");
  pokemonNew.innerText = pokemonName.name;
  pokemonNew.classList.add("new-pokemon-name");

  pokemon.appendChild(pokemonNew);

  return pokemon;
}

const mainButton = document.getElementsByClassName("main__button");
mainButton.addEventListener("click", displayPokemon);

//getPokemon();
