const pokemonContainer = document.querySelector('.poke_container');

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};
const main_types = Object.keys(colors);





fetchPokemons(150)


function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((response) => response.json())
        .then((data) => {
            createPokemon(data);
        });
}



function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);
    }
}

function createPokemon(pokemon) {

    const poke_types = pokemon.types.map(el => el.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const color = colors[type];
    pokemon

    const card = document.createElement('div');
    card.classList.add('pokemonBlock');
    card.style.backgroundColor = color;


    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');


    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default
    sprite.classList.add('image')


    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;
    number.classList.add('ref')


    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

    const typetxt = document.createElement('p');
    typetxt.classList.add('typeTxt');
    typetxt.textContent = `Type : ${type}`


    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(typetxt);

    pokemonContainer.appendChild(card);



}