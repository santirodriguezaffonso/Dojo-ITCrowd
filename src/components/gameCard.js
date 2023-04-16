export const gameCard = (data) => {
  return data.topCriticScore
    ? `
    <article class="gameCard" id="gameCard" data-game-id="${data.id}">
      <div class="gameTextContainer">
        <h2 class="gameTitle">${data.name}</h2>
        <div class="gameTierContainer">
          <h3 class="gameTierText">Tier</h3>
          <img class="gameTier" src="/src/assets/images/${data.tier}-head.png" height="30"  alt="Game Status">
        </div>
        <p class="gameScore">Game Score: ${data.topCriticScore}</p>
      </div>
    </article>
    `
    : `
    <article class="gameCard" id="gameCard" data-game-id="${data.id}">
      <div class="gameTextContainer">
        <h2 class="gameTitle">${data.name}</h2>
        <p class="gameScore">Dist: ${data.dist}</p>
      </div>
    </article>
    `;
};
