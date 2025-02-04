
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
const list = document.getElementsByClassName("cards");



const renderPokemons = () => {

    for(let i = 0; i < data.length; i++){
        const card = document.createElement("li");
        const pokemonName = document.createElement("h2");
        const pokemonImg = document.createElement("img");
        const pokemonUl = document.createElement("ul");
        card.classList.add("card");
        pokemonName.classList.add("card--title");
        pokemonImg.classList.add("card--img");
        pokemonImg.width = 256;
        pokemonUl.classList.add("card--text");

        const pokemon = data[i];
        pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        pokemonImg.src = pokemon.sprites.other["official-artwork"].front_default;

        for (let i = 0; i < pokemon.stats.length; i++) {
            const pokemonStat = document.createElement("li");
            pokemonStat.textContent = (pokemon.stats[i].stat.name).toUpperCase() +": " + pokemon.stats[i].base_stat;
            pokemonUl.appendChild(pokemonStat);
        }
        card.appendChild(pokemonName);
        card.appendChild(pokemonImg);
        card.appendChild(pokemonUl);

        console.log(card);

        list[0].appendChild(card);
    }
}

renderPokemons();
