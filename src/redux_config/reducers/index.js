import {combineReducers} from 'redux';
import search from './search';
import topRatedMovies from './top-rated';
import recommendedMovies from './recommended';

const rootReducer = combineReducers({
  search,
  top_rated_movies: topRatedMovies,
  recommended_movies: recommendedMovies,
});

export default rootReducer;
