import React from 'react';
import MovieSection from 'shared/section/movie_section';

import {useDispatch, useSelector} from 'react-redux';
import {recommended_movies} from 'redux_config/selectors';
import {fetchRecommendedMovies} from 'redux_config/actions/movies';

import * as R from 'ramda';

export default function TopRatedMovies() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return recommended_movies(state);
  });

  const [movieId, setMovieId] = React.useState(299534);

  React.useEffect(() => {
    if (R.isEmpty(data) || R.isNil(data)) {
      dispatch(fetchRecommendedMovies({movieId: movieId}));
    }
  });

  return (
    <MovieSection title={'RECOMMENDED FOR YOU'} seeAll={true} data={data} />
  );
}
