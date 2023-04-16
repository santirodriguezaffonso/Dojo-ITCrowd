import { request } from "./index.js";

export const getGames = async (value) => {
  const popularGamesData = await request("popular");
  return popularGamesData;
};

export const getGameById = async (id) => {
  const gameData = await request(id);
  return gameData;
};

export const searchGamesFor = async (input) => {
  const gamesData = await request("search", input);
  return gamesData;
};
