function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

const p1 = new Pokemon("pikachu", "electric", ["lightning Rod", "static"]);
const p2 = new Pokemon("charizard", "fire", [
    "blaze",
    "solar power",
    "tough claws",
]);
const p3 = new Pokemon("bulbasaur", "grass", ["overgrow", "Chlorophyll"]);

Pokemon.prototype.callPokemon = function () {
    console.log(`I choose you, ${this.name}`);
};
Pokemon.prototype.attack = function (attacknum) {
    console.log(`${this.name} used ${this.attackList[attacknum]}`);
};

p1.callPokemon();
p1.attack(1);
p2.callPokemon();
p2.attack(1);
p3.callPokemon();
p3.attack(1);
