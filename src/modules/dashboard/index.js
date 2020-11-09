import React from 'react';
import {View} from 'react-native';

//components
import SearchBar from './ui/search-bar';

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
      <View style={s.movie_list_container}></View>
    </View>
  );
}
