import { getGames, searchGamesFor } from "../../services/games.js";
import { gameCard } from "../../components/gameCard.js";

const list = document.getElementById("list");
const form = document.getElementById("formgames");
const searchInput = document.getElementById("searchInput");

let timer;
let text = "";

const clearList = () => {
  list.innerHTML = "";
};

const getPopularGames = async () => {
  try {
    const popularGames = await getGames("popular");

    rendeCards(popularGames);
  } catch (error) {
    console.warn(error);
  }
};

getPopularGames();

const searchGamesBy = async (input) => {
  try {
    const gamesFound = await searchGamesFor(input);

    console.log("PRINTED FROM HOME", gamesFound);

    rendeCards(gamesFound);
  } catch (error) {
    console.warn(error);
  }
};

const rendeCards = (data) => {
  if (data) {
    clearList();

    data.forEach((item) => {
      const gameCardLiteral = gameCard(item);
      list.insertAdjacentHTML("beforeend", gameCardLiteral);
    });

    const gameCards = document.querySelectorAll(".gameCard");
    gameCards.forEach((gameCard) => {
      gameCard.addEventListener("click", () => {
        const gameId = gameCard.dataset.gameId;
        window.location.href = `/src/pages/details/details.html?id=${gameId}`;
      });
    });
  }
};

form.addEventListener("submit", () => {
  searchGamesBy(text);
});

searchInput.addEventListener("input", (event) => {
  clearTimeout(timer);

  text = event.target.value;

  timer = setTimeout(() => {
    if (text !== "") {
      searchGamesBy(text);
    } else {
      console.warn("EMPTY FIELD");
    }
  }, 500);
});
