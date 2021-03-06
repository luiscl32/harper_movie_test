import React from 'react';
import {View, ScrollView} from 'react-native';

//components
import SearchBar from './ui/search-bar';
import MovieSection from 'shared/section/movie_section';
import TopRatedMovies from './ui/top-rated';
import RecommendedMovies from './ui/recommended-movies';
import Btn from 'shared/button/Btn';
import Icon from 'react-native-vector-icons/Ionicons';
//selectors
import {useDispatch, useSelector} from 'react-redux';
import {movies, app_theme, isLoadingMovies} from 'redux_config/selectors';

//
import {changeTheme} from 'redux_config/actions/theme';

import * as R from 'ramda';
import s from './styles';
import c from 'theme/colors';

export default function Dashboard() {
  const dispatch = useDispatch();
  const moviesSearched = useSelector((state) => {
    return movies(state);
  });
  const loading = useSelector((state) => {
    return isLoadingMovies(state);
  });
  const theme = useSelector((state) => {
    return app_theme(state);
  });

  const [selectTheme, setSelectTheme] = React.useState(theme);

  function _onChangeTheme() {
    setSelectTheme(!selectTheme);
    dispatch(changeTheme({theme_change: !selectTheme}));
  }

  return (
    <View style={s.main}>
      <View style={s.btn}>
        <Btn onPress={_onChangeTheme}>
          <Icon
            name={theme ? 'moon' : 'moon-outline'}
            color={c.white}
            size={24}
          />
        </Btn>
      </View>

      <SearchBar />
      <View style={s.movie_list_container(theme)}>
        <ScrollView style={s.scroll} showsVerticalScrollIndicator={false}>
          {!R.isEmpty(moviesSearched) && !R.isNil(moviesSearched) && (
            <MovieSection
              title={'SEARCH RESULTS'}
              seeAll={false}
              data={moviesSearched}
              loading={loading}
            />
          )}

          <RecommendedMovies />
          <TopRatedMovies />
        </ScrollView>
      </View>
    </View>
  );
}
