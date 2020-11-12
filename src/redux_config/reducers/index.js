import {combineReducers} from 'redux';
import search from './search';
import topRatedMovies from './top-rated';
import recommendedMovies from './recommended';
import movieDetail from './movie-detail';
import MovieActors from './movie-actors';
import theme from './theme';

const rootReducer = combineReducers({
  search,
  top_rated_movies: topRatedMovies,
  recommended_movies: recommendedMovies,
  movie_detail: movieDetail,
  movie_actors: MovieActors,
  theme,
});

export default rootReducer;
