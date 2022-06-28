function numero (a,b) {
    return (a + b);
}
console.log(numero(5,5))

/* FOR EACH */
const arrayNum = [1,2,3,4,5,6,7]
const pokemones = ["Picachu","Bulbasaur","Charmander","Squirtle"]

const numFiltered = arrayNum.filter((num) => {
    return num > 3
});
console.log(numFiltered)
/* const forEach = arrayNum.forEach((numero, i) => {
    console.log({i, numero});
    console.log({i, numero} + 1 + ": " + numero)
 });
 const map = pokemones.map((pokemon, i) => {
    console.log({i, pokemon});
    console.log({i, pokemon} + 1 + ": " + pokemon)
    pokemon.toUpperCase()
 });
 const map2 = pokemones.map((pokemon, i) => pokemon.toUpperCase());

console.log("pokemones: ", pokemones);
console.log("map2", map2); */

