import React from 'react';
import {View, ScrollView} from 'react-native';
import MovieHeader from './ui/movie-header';
import Description from './ui/description';
import Actors from './ui/actors';
import MovieInfo from './ui/movie-info';

import s from './styles';

export default function MovieDetail({route, navigation}) {
  const {item} = route?.params;

  return (
    <View style={s.container}>
      <ScrollView style={s.scroll}>
        <MovieHeader img={item?.imgurl} />

        <Description name={item?.name} />

        <Actors />

        <MovieInfo />
      </ScrollView>
    </View>
  );
}
