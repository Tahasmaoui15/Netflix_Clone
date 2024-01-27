const API_KEY = "c778376f64883db94f27c963461152da";

export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let randomPage = getRandom(1, 200);
let randomPageOriginals = getRandom(1, 10);

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&page=${randomPage}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&page=${randomPageOriginals}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${randomPage}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&page=${randomPage}`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&page=${randomPage}`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&page=${randomPage}`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&page=${randomPage}`,
  fetcDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&page=${randomPage}`,
};



