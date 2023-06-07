import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '6c7bf07634a6f35c9bd58e8125654f91';

export const fetchMovies = async () => {
  const {data} = await axios.get(`trending/movie/week?api_key=${API_KEY}`)
  return data.results;
}

export const fetchMovieQuery = async query => {
  const { data } = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
  return data.results;
}

export const fetchMovieId = async movieId => {
  const { data } = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  return data;
}
    
export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
  return data.cast;
}

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`);
  return data.results;
}
