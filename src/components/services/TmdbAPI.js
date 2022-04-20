import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '7564a9f1d72902c417cb9daa093a6de5';

const fetchMovies = () => {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then(res =>
    res.json()
  );
};

const fetchMoviesById = id => {
  return fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  ).then(res => res.json());
};

const fetchMoviesCast = id => {
  return fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then(res => res.json());
};

const fetchMoviesReviews = id => {
  return fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  ).then(res => res.json());
};

const fetchMoviesByName = keyWord => {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${keyWord}&page=1&include_adult=false`
  ).then(res => res.json());
};

const api = {
  fetchMovies,
  fetchMoviesById,
  fetchMoviesCast,
  fetchMoviesReviews,
  fetchMoviesByName,
};

export default api;

fetchMovies.propTypes = {
  id: PropTypes.string,
};

fetchMoviesById.propTypes = {
  id: PropTypes.string,
};
fetchMoviesCast.propTypes = {
  id: PropTypes.string,
};
fetchMoviesReviews.propTypes = {
  id: PropTypes.string,
};
fetchMoviesByName.propTypes = {
  id: PropTypes.string,
};
