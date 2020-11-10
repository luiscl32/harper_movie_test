import React from 'react';
import {View, ScrollView} from 'react-native';

//components
import SearchBar from './ui/search-bar';
import MovieSection from 'shared/section/movie_section';

import s from './styles';

import {useNavigation} from '@react-navigation/native';

export default function Dashboard() {
  const {navigate} = useNavigation();

  function _navigate() {
    navigate('second');
  }

  return (
    <View style={s.main}>
      <SearchBar />
      <View style={s.movie_list_container}>
        <ScrollView style={s.scroll} showsVerticalScrollIndicator={false}>
          <MovieSection title={'RECOMMENDED FOR YOU'} seeAll={true} />
          <MovieSection title={'TOP RATED'} seeAll={true} />
        </ScrollView>
      </View>
    </View>
  );
}
