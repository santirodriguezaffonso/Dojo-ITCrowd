const BASE_URL = "https://opencritic-api.p.rapidapi.com/game/";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "12acb98d47mshd52e4ee69d883cep18e665jsn331e12a50f31",
    "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com",
  },
};

/**
 *
 * @param {string} urlPath path to define which request to do
 * @param {string} input input value to look for
 * @returns data fetched from server
 */

export const request = async (urlPath, input) => {
  const requestUrl = input
    ? `${BASE_URL}${urlPath}?criteria=${input}`
    : `${BASE_URL}${urlPath}`;

  try {
    const result = await fetch(requestUrl, options);
    const jsonData = await result.json();
    return jsonData;
  } catch (error) {
    console.warn("API_Request Error:", error);
    return error;
  }
};
