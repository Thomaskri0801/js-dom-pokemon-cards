
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
const list = document.getElementsByClassName("cards");

const handleToggleImages = (pokemon, pokemonImg) => {
    const images = [
        pokemon.sprites.other["official-artwork"].front_default,
        pokemon.sprites.front_default,
        pokemon.sprites.back_default,
        pokemon.sprites.front_shiny,
        pokemon.sprites.back_shiny
    ];

    const currentIndex = images.indexOf(pokemonImg.src);
    console.log(currentIndex);
    const nextIndex = (currentIndex + 1) % images.length;
    console.log(nextIndex);
    return images[nextIndex];
}




const renderPokemons = () => {

    list[0].innerHTML = "";

    for(let i = 0; i < data.length; i++){
        const pokemon = data[i];
        const card = document.createElement("li");
        const pokemonName = document.createElement("h2");
        const pokemonImg = document.createElement("img");
        const pokemonUl = document.createElement("ul");
        const pokemonGame = document.createElement("ul");
        const pokemonGameVersion = document.createElement("li");


        pokemonGame.textContent = "APPEARED IN: ";

        card.classList.add("card");
        pokemonName.classList.add("card--title");
        pokemonImg.classList.add("card--img");
        pokemonImg.width = 256;
        pokemonUl.classList.add("card--text");
        pokemonGame.classList.add("card--text");

        pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        pokemonImg.src = pokemon.sprites.other["official-artwork"].front_default;
        card.addEventListener("click", () => {
            pokemonImg.src = handleToggleImages(pokemon, pokemonImg);
        });

        for (let i = 0; i < pokemon.stats.length; i++) {
            const pokemonStat = document.createElement("li");
            pokemonStat.textContent = (pokemon.stats[i].stat.name).toUpperCase() +": " + pokemon.stats[i].base_stat;
            pokemonUl.appendChild(pokemonStat);
        }

        for (let i = 0; i < pokemon.game_indices.length; i++) {
            pokemonGameVersion.textContent += (pokemon.game_indices[i].version.name).toUpperCase() +", ";
        }
        pokemonGame.appendChild(pokemonGameVersion);
        
        card.appendChild(pokemonName);
        card.appendChild(pokemonImg);
        card.appendChild(pokemonUl);
        card.appendChild(pokemonGame);

        list[0].appendChild(card);
    }
}

renderPokemons();
