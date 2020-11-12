import React from 'react';
import {View, ScrollView} from 'react-native';

//components
import SearchBar from './ui/search-bar';
import MovieSection from 'shared/section/movie_section';
import TopRatedMovies from './ui/top-rated';
import RecommendedMovies from './ui/recommended-movies';

//selectors
import {movies} from 'redux_config/selectors';

import * as R from 'ramda';
import s from './styles';
import {useSelector} from 'react-redux';

export default function Dashboard() {
  const moviesSearched = useSelector((state) => {
    return movies(state);
  });

  return (
    <View style={s.main}>
      <SearchBar />
      <View style={s.movie_list_container}>
        <ScrollView style={s.scroll} showsVerticalScrollIndicator={false}>
          {!R.isEmpty(moviesSearched) && !R.isNil(moviesSearched) && (
            <MovieSection
              title={'SEARCH RESULTS'}
              seeAll={false}
              data={moviesSearched}
            />
          )}

          <RecommendedMovies />
          <TopRatedMovies />
        </ScrollView>
      </View>
    </View>
  );
}
