const API_KEY="cc6c7aa76622ec427c2cdcf2321853ba"
const API_URL="https://api.themoviedb.org/3"
const MOVIE_URL=API_URL+"/movie"
const MOVIE_API_KEY=API_KEY
const MOVIE_API_URL=API_URL+"/search/movie?api_key="+API_KEY+"&query="
const MOVIE_API_URL_WITH_ID=API_URL+"/movie/"

const Popular_Movies=API_URL+"/movie/popular?api_key="+API_KEY+"&language=en-US&page=1";

const Popular_Movies_WITH_SORT = (sortOption = "release_date.desc") =>
  `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&sort_by=${encodeURIComponent(sortOption)}&page=1`;

export const getPopularMovies= async (sortOption = "release_date.desc") => {
    try {
      const url = Popular_Movies_WITH_SORT(sortOption);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      return [];
    }
}

export const searchMovies= async (searchQuery) => {
  try {
    const url = MOVIE_API_URL+ encodeURIComponent(searchQuery);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
}