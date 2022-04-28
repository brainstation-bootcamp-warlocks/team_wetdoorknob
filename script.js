
/* 
    click button
    grab pokemon name
    print pokemon name (maybe in like a sentence) on the page
    (probably need a clear function somewhere)
    everytime u refresh / press the button again, a new pokemon will replace it

*/




function getPokemon() {



    function getRandomNumber(max) {
        return Math.floor(Math.random()*max);
        
    }
    const number = getRandomNumber(500);


    console.log(number);

    {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`)
        .then(result => {
            console.log(result.data.name);
        })
        .catch(error => {
            console.log(error);
        })

    }

    
    

}

/*
const mainButton = document.getElementsByClassName("main__button");
mainButton.addEventListener("click", getPokemon)
*/


//getPokemon();

