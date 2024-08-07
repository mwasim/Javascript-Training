const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const spriteContainer = document.getElementById("sprite-container");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase().replace(/[^a-z0-9]/g, "-");

  fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      pokemonName.textContent = data.name.toUpperCase();
      pokemonId.textContent = `#${data.id}`;
      weight.textContent = `Weight: ${data.weight}`;
      height.textContent = `Height: ${data.height}`;
      types.innerHTML = data.types
        .map((t) => `<span class="type ${t.type.name}">${t.type.name}</span>`)
        .join("");
      hp.textContent = data.stats.find(
        (stat) => stat.stat.name === "hp"
      ).base_stat;
      attack.textContent = data.stats.find(
        (stat) => stat.stat.name === "attack"
      ).base_stat;
      defense.textContent = data.stats.find(
        (stat) => stat.stat.name === "defense"
      ).base_stat;
      specialAttack.textContent = data.stats.find(
        (stat) => stat.stat.name === "special-attack"
      ).base_stat;
      specialDefense.textContent = data.stats.find(
        (stat) => stat.stat.name === "special-defense"
      ).base_stat;
      speed.textContent = data.stats.find(
        (stat) => stat.stat.name === "speed"
      ).base_stat;
      spriteContainer.innerHTML = `
      <img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">
    `;
    })
    .catch((error) => {
      resetUI();
      alert(`Pokémon not found`);
      console.log(error);
    });
});

const resetUI = () => {
  const sprite = document.getElementById("sprite");
  if (sprite) sprite.remove();

  // reset stats
  pokemonName.textContent = "";
  pokemonId.textContent = "";
  types.innerHTML = "";
  height.textContent = "";
  weight.textContent = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
  spriteContainer.innerHTML = "";
};
