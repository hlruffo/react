import axios from "axios";

export async function getData(type) {
  
  let categoria = type === "filmes" ? "movie" : "tv";

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${categoria}/top_rated`,
      //`https://api.themoviedb.org/3/movie/top_rated`,
      {
        params: {
          //api_key: process.env.REACT_APP_TMDB_API_KEY,
          api_key: "11281bbd033476a4abe4c16d322736f2",
          page: 1,
          language: "pt-BR",
        },
      }
    );
    //console.log(response.data.results);
    return { data: response.data.results };
  } catch (error) {
    //console.log(error);
    return { error: error.message };
  }
}
