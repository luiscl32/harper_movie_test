import React from 'react';
import {View, ScrollView} from 'react-native';
import MovieHeader from './ui/movie-header';
import Description from './ui/description';
import Actors from './ui/actors';
import MovieInfo from './ui/movie-info';

import {useDispatch, useSelector} from 'react-redux';
import {fetchMovieDetail} from 'redux_config/actions/movies';
import {movie_detail, app_theme} from 'redux_config/selectors';

import * as R from 'ramda';
import s from './styles';

export default function MovieDetail({route, navigation}) {
  const {movieId} = route?.params;

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return movie_detail(state);
  });

  const theme = useSelector((state) => {
    return app_theme(state);
  });

  React.useEffect(() => {
    dispatch(fetchMovieDetail({movieId: movieId}));
  }, [movieId]);

  return (
    <View style={s.container(theme)}>
      <ScrollView style={s.scroll}>
        <MovieHeader img={data?.backdrop_path} />

        <Description
          name={data?.original_title}
          movieDescription={data?.overview}
          stars={data?.vote_average}
          theme={theme}
        />

        <Actors movieId={movieId} theme={theme} />

        <MovieInfo
          studio={data?.production_companies}
          gender={data?.genres}
          release={data?.release_date}
          theme={theme}
        />
      </ScrollView>
    </View>
  );
}
