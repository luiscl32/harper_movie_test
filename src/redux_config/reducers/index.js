import {combineReducers} from 'redux';
import search from './search';
import topRatedMovies from './top-rated';
import recommendedMovies from './recommended';
import movieDetail from './movie-detail';

const rootReducer = combineReducers({
  search,
  top_rated_movies: topRatedMovies,
  recommended_movies: recommendedMovies,
  movie_detail: movieDetail,
});

export default rootReducer;
