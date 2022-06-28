const containerPokemon = document.querySelector(".container-pokemon")

let offset = 1;
let limit = 20;

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => {
            createPokemon(data);
        });
}
function fetchPokemones(offset, limit) {
    for (let i = offset; i <= offset + limit; i++) {
        fetchPokemon(i);
    }
}

function createPokemon(pokemon) {
    const card = document.createElement("div");
    card.classList.add("pokemon-block");

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    containerPokemon.appendChild(card);
}
fetchPokemones(offset, limit) 

/* const pokemon = async () => {
    const getPokemones = await fetch(" https://pokeapi.co/api/v2/pokemon/ ") */
/* const data = await Request.json()
return data; */
/*         .then(Response => Response.json())
        .then(data => console.log(data));
}
console.log(pokemon)
 */
 

