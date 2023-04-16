import { getGameById } from "../../services/games.js";
import { platformCard } from "../../components/platformCard.js";

const gameCover = document.getElementById("gameCover");
const textDetailsContainer = document.getElementById("textDetailsContainer");
const platformList = document.getElementById("platformList");
const gameTitle = textDetailsContainer.childNodes.item(1).childNodes.item(1);
const gameGenres = textDetailsContainer.childNodes.item(5).childNodes.item(3);
const gameDescription = textDetailsContainer.childNodes
  .item(7)
  .childNodes.item(3);
const gameTierImage = document.getElementById("imgTier");
const searchParams = new URLSearchParams(window.location.search);
const gameId = searchParams.get("id");

console.log("THIS IS GAME ID:", gameId);

const verdunImage = "../../assets/images/Verdun-Cover.jpg";

if (gameId) {
  gameCover.src = verdunImage;
}

const fetchGameDetails = async () => {
  const gameDetails = await getGameById(gameId);
  console.log("PRINT GAME DETAIL:", gameDetails);

  render(gameDetails);
};

const render = (gameData) => {
  const imageURL = `../../assets/images/${gameData.tier}-head.png`;

  gameTitle.textContent = gameData.name;
  gameTierImage.src = imageURL;
  gameData.Genres.forEach((element) => {
    gameGenres.textContent += ` ${element.name}`;
  });
  gameDescription.textContent = gameData.description;

  gameData.Platforms.forEach((element) => {
    const platformCardLiteral = platformCard(element);
    platformList.insertAdjacentHTML("beforeend", platformCardLiteral);
  });
};

fetchGameDetails();
