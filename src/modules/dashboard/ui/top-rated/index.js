import React from 'react';
import MovieSection from 'shared/section/movie_section';

import {useDispatch, useSelector} from 'react-redux';
import {top_rated_movies, isLoadingTopRated} from 'redux_config/selectors';
import {fetchTopRatedMovies} from 'redux_config/actions/movies';

import * as R from 'ramda';

export default function TopRatedMovies() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return top_rated_movies(state);
  });
  const loading = useSelector((state) => {
    return isLoadingTopRated(state);
  });

  React.useEffect(() => {
    if (R.isEmpty(data) || R.isNil(data)) {
      dispatch(fetchTopRatedMovies());
    }
  });

  return (
    <MovieSection
      title={'TOP RATED'}
      seeAll={true}
      data={data}
      loading={loading}
    />
  );
}
