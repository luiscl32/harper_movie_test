import {combineReducers} from 'redux';
import search from './search';
import topRatedMovies from './top-rated';

const rootReducer = combineReducers({
  search,
  top_rated_movies: topRatedMovies,
});

export default rootReducer;
